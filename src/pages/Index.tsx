import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Employee {
  id: number;
  name: string;
  position: string;
  phone: string;
  is_active: boolean;
}

interface Shift {
  id: number;
  employee_id: number;
  shift_date: string;
  start_time: string;
  end_time: string;
  shift_type: 'morning' | 'day' | 'evening' | 'night' | 'custom';
  notes: string;
}

const Index = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: 1, name: 'Анна Иванова', position: 'Бариста', phone: '+7 999 111-11-11', is_active: true },
    { id: 2, name: 'Петр Сидоров', position: 'Официант', phone: '+7 999 222-22-22', is_active: true },
    { id: 3, name: 'Мария Петрова', position: 'Менеджер', phone: '+7 999 333-33-33', is_active: true }
  ]);
  
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [newEmployee, setNewEmployee] = useState({ name: '', position: '', phone: '' });
  const [newShift, setNewShift] = useState({
    employee_id: 0,
    shift_date: new Date().toISOString().split('T')[0],
    start_time: '09:00',
    end_time: '18:00',
    shift_type: 'day' as const,
    notes: ''
  });

  const getDaysInWeek = (date: string) => {
    const current = new Date(date);
    const week = [];
    const dayOfWeek = current.getDay();
    const diff = current.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(current.setDate(diff + i));
      week.push(day.toISOString().split('T')[0]);
    }
    return week;
  };

  const weekDays = getDaysInWeek(selectedDate);
  const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  const addEmployee = () => {
    if (!newEmployee.name.trim() || !newEmployee.position.trim()) return;
    const employee: Employee = {
      id: Date.now(),
      ...newEmployee,
      is_active: true
    };
    setEmployees([...employees, employee]);
    setNewEmployee({ name: '', position: '', phone: '' });
  };

  const addShift = () => {
    if (newShift.employee_id === 0) return;
    const shift: Shift = {
      id: Date.now(),
      ...newShift
    };
    setShifts([...shifts, shift]);
    setNewShift({
      employee_id: 0,
      shift_date: new Date().toISOString().split('T')[0],
      start_time: '09:00',
      end_time: '18:00',
      shift_type: 'day',
      notes: ''
    });
  };

  const deleteShift = (shiftId: number) => {
    setShifts(shifts.filter(s => s.id !== shiftId));
  };

  const getShiftColor = (type: string) => {
    switch (type) {
      case 'morning': return 'bg-yellow-100 border-yellow-400';
      case 'day': return 'bg-blue-100 border-blue-400';
      case 'evening': return 'bg-purple-100 border-purple-400';
      case 'night': return 'bg-indigo-100 border-indigo-400';
      default: return 'bg-gray-100 border-gray-400';
    }
  };

  const getShiftName = (type: string) => {
    switch (type) {
      case 'morning': return 'Утро';
      case 'day': return 'День';
      case 'evening': return 'Вечер';
      case 'night': return 'Ночь';
      default: return 'Другое';
    }
  };

  const getShiftsForEmployeeAndDate = (employeeId: number, date: string) => {
    return shifts.filter(s => s.employee_id === employeeId && s.shift_date === date);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white border-b shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                График работы
              </h1>
            </div>
            
            <div className="flex items-center gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" variant="outline">
                    <Icon name="UserPlus" size={16} className="mr-2" />
                    Сотрудник
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Добавить сотрудника</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Имя</label>
                      <Input
                        placeholder="ФИО сотрудника"
                        value={newEmployee.name}
                        onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Должность</label>
                      <Input
                        placeholder="Должность"
                        value={newEmployee.position}
                        onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input
                        placeholder="+7 999 999-99-99"
                        value={newEmployee.phone}
                        onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
                      />
                    </div>
                    <Button onClick={addEmployee} className="w-full">Добавить</Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" className="bg-gradient-to-r from-primary to-secondary text-white">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Смена
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Создать смену</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сотрудник</label>
                      <Select
                        value={newShift.employee_id.toString()}
                        onValueChange={(value) => setNewShift({ ...newShift, employee_id: parseInt(value) })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите сотрудника" />
                        </SelectTrigger>
                        <SelectContent>
                          {employees.filter(e => e.is_active).map(emp => (
                            <SelectItem key={emp.id} value={emp.id.toString()}>
                              {emp.name} - {emp.position}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Дата</label>
                      <Input
                        type="date"
                        value={newShift.shift_date}
                        onChange={(e) => setNewShift({ ...newShift, shift_date: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Начало</label>
                        <Input
                          type="time"
                          value={newShift.start_time}
                          onChange={(e) => setNewShift({ ...newShift, start_time: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Конец</label>
                        <Input
                          type="time"
                          value={newShift.end_time}
                          onChange={(e) => setNewShift({ ...newShift, end_time: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Тип смены</label>
                      <Select
                        value={newShift.shift_type}
                        onValueChange={(value: any) => setNewShift({ ...newShift, shift_type: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Утренняя</SelectItem>
                          <SelectItem value="day">Дневная</SelectItem>
                          <SelectItem value="evening">Вечерняя</SelectItem>
                          <SelectItem value="night">Ночная</SelectItem>
                          <SelectItem value="custom">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Примечания</label>
                      <Textarea
                        placeholder="Доп. информация..."
                        value={newShift.notes}
                        onChange={(e) => setNewShift({ ...newShift, notes: e.target.value })}
                      />
                    </div>
                    <Button onClick={addShift} className="w-full">Создать смену</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                const prev = new Date(selectedDate);
                prev.setDate(prev.getDate() - 7);
                setSelectedDate(prev.toISOString().split('T')[0]);
              }}
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>
            <Input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-auto"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                const next = new Date(selectedDate);
                next.setDate(next.getDate() + 7);
                setSelectedDate(next.toISOString().split('T')[0]);
              }}
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            {employees.filter(e => e.is_active).length} сотрудников • {shifts.length} смен
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-max">
            <div className="grid grid-cols-8 gap-2 mb-2">
              <div className="font-semibold text-sm">Сотрудник</div>
              {weekDays.map((day, idx) => (
                <div key={day} className="text-center">
                  <div className="font-semibold text-sm">{dayNames[idx]}</div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(day).getDate()}.{new Date(day).getMonth() + 1}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {employees.filter(e => e.is_active).map(employee => (
                <Card key={employee.id}>
                  <CardContent className="p-3">
                    <div className="grid grid-cols-8 gap-2">
                      <div className="flex flex-col justify-center">
                        <div className="font-semibold text-sm">{employee.name}</div>
                        <div className="text-xs text-muted-foreground">{employee.position}</div>
                      </div>
                      
                      {weekDays.map(day => {
                        const dayShifts = getShiftsForEmployeeAndDate(employee.id, day);
                        return (
                          <div key={day} className="min-h-16 border rounded-lg p-2 bg-gray-50">
                            {dayShifts.map(shift => (
                              <div
                                key={shift.id}
                                className={`text-xs p-2 rounded border-l-2 mb-1 ${getShiftColor(shift.shift_type)}`}
                              >
                                <div className="flex items-start justify-between gap-1">
                                  <div className="font-semibold">{getShiftName(shift.shift_type)}</div>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-4 w-4"
                                    onClick={() => deleteShift(shift.id)}
                                  >
                                    <Icon name="X" size={12} />
                                  </Button>
                                </div>
                                <div className="text-xs mt-1">
                                  {shift.start_time} - {shift.end_time}
                                </div>
                                {shift.notes && (
                                  <div className="text-xs text-muted-foreground mt-1 truncate">
                                    {shift.notes}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {employees.filter(e => e.is_active).length === 0 && (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Добавьте сотрудников</h3>
                <p className="text-muted-foreground mb-6">Начните с добавления сотрудников для создания графика</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
