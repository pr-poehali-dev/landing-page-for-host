import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Task {
  id: number;
  column_id: number;
  title: string;
  description: string;
  position: number;
  priority: 'low' | 'medium' | 'high';
}

interface Column {
  id: number;
  board_id: number;
  title: string;
  position: number;
  tasks: Task[];
}

const Index = () => {
  const [columns, setColumns] = useState<Column[]>([
    { id: 1, board_id: 1, title: 'Запланировано', position: 0, tasks: [] },
    { id: 2, board_id: 1, title: 'В работе', position: 1, tasks: [] },
    { id: 3, board_id: 1, title: 'Готово', position: 2, tasks: [] }
  ]);
  const [newColumnTitle, setNewColumnTitle] = useState('');
  const [newTaskData, setNewTaskData] = useState({ title: '', description: '', priority: 'medium' as const, columnId: 0 });
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);

  const addColumn = () => {
    if (!newColumnTitle.trim()) return;
    const newColumn: Column = {
      id: Date.now(),
      board_id: 1,
      title: newColumnTitle,
      position: columns.length,
      tasks: []
    };
    setColumns([...columns, newColumn]);
    setNewColumnTitle('');
  };

  const addTask = (columnId: number) => {
    if (!newTaskData.title.trim()) return;
    const column = columns.find(c => c.id === columnId);
    if (!column) return;

    const newTask: Task = {
      id: Date.now(),
      column_id: columnId,
      title: newTaskData.title,
      description: newTaskData.description,
      position: column.tasks.length,
      priority: newTaskData.priority
    };

    setColumns(columns.map(col => 
      col.id === columnId 
        ? { ...col, tasks: [...col.tasks, newTask] }
        : col
    ));
    
    setNewTaskData({ title: '', description: '', priority: 'medium', columnId: 0 });
  };

  const handleDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const handleDrop = (targetColumnId: number) => {
    if (!draggedTask) return;

    setColumns(columns.map(col => {
      if (col.id === draggedTask.column_id) {
        return { ...col, tasks: col.tasks.filter(t => t.id !== draggedTask.id) };
      }
      if (col.id === targetColumnId) {
        return { ...col, tasks: [...col.tasks, { ...draggedTask, column_id: targetColumnId }] };
      }
      return col;
    }));

    setDraggedTask(null);
  };

  const deleteTask = (taskId: number, columnId: number) => {
    setColumns(columns.map(col => 
      col.id === columnId 
        ? { ...col, tasks: col.tasks.filter(t => t.id !== taskId) }
        : col
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <header className="bg-white border-b shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TaskBoard
              </h1>
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-lg">
                <Icon name="Layout" size={18} className="text-primary" />
                <span className="font-semibold">Мой проект</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground hidden sm:block">
                {columns.reduce((sum, col) => sum + col.tasks.length, 0)} задач
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-2 border-dashed">
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить колонку
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Новая колонка</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <Input
                  placeholder="Название колонки"
                  value={newColumnTitle}
                  onChange={(e) => setNewColumnTitle(e.target.value)}
                />
                <Button onClick={addColumn} className="w-full">Создать</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {columns.map((column) => (
            <div
              key={column.id}
              className="flex-shrink-0 w-80"
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(column.id)}
            >
              <Card className="h-full border-2">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-semibold text-lg">{column.title}</h3>
                    <span className="text-sm text-muted-foreground bg-purple-100 px-2 py-1 rounded-full">
                      {column.tasks.length}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {column.tasks.map((task) => (
                    <Card
                      key={task.id}
                      draggable
                      onDragStart={() => handleDragStart(task)}
                      className="cursor-move hover:shadow-md transition-shadow border-l-4"
                      style={{ borderLeftColor: task.priority === 'high' ? '#EF4444' : task.priority === 'medium' ? '#F59E0B' : '#10B981' }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-semibold">{task.title}</h4>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 shrink-0"
                            onClick={() => deleteTask(task.id, column.id)}
                          >
                            <Icon name="X" size={14} />
                          </Button>
                        </div>
                        {task.description && (
                          <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
                        )}
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-1 rounded-full text-white ${getPriorityColor(task.priority)}`}>
                            {task.priority === 'high' ? 'Высокий' : task.priority === 'medium' ? 'Средний' : 'Низкий'}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full border-2 border-dashed hover:border-primary hover:bg-purple-50"
                        onClick={() => setNewTaskData({ ...newTaskData, columnId: column.id })}
                      >
                        <Icon name="Plus" size={16} className="mr-2" />
                        Добавить карточку
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Новая задача</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 pt-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Название</label>
                          <Input
                            placeholder="Что нужно сделать?"
                            value={newTaskData.title}
                            onChange={(e) => setNewTaskData({ ...newTaskData, title: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Описание</label>
                          <Textarea
                            placeholder="Детали задачи..."
                            value={newTaskData.description}
                            onChange={(e) => setNewTaskData({ ...newTaskData, description: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Приоритет</label>
                          <Select
                            value={newTaskData.priority}
                            onValueChange={(value: 'low' | 'medium' | 'high') => 
                              setNewTaskData({ ...newTaskData, priority: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Низкий</SelectItem>
                              <SelectItem value="medium">Средний</SelectItem>
                              <SelectItem value="high">Высокий</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button onClick={() => addTask(column.id)} className="w-full">
                          Создать задачу
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {columns.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Icon name="Layout" size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">Начните с создания колонки</h3>
            <p className="text-muted-foreground mb-6">Создайте колонки для организации ваших задач</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
