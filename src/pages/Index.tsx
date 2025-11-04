import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    message: ''
  });

  const services = [
    {
      icon: 'PartyPopper',
      title: 'Свадьбы',
      description: 'Сделаю ваш день незабываемым с профессиональной программой и атмосферой праздника'
    },
    {
      icon: 'Cake',
      title: 'Дни рождения',
      description: 'Веселые игры, конкурсы и развлечения для гостей любого возраста'
    },
    {
      icon: 'Briefcase',
      title: 'Корпоративы',
      description: 'Создам деловую и одновременно непринужденную атмосферу для вашей команды'
    },
    {
      icon: 'Music',
      title: 'Концерты',
      description: 'Профессиональное ведение концертов и музыкальных мероприятий'
    },
    {
      icon: 'Award',
      title: 'Конференции',
      description: 'Модерация, презентации и работа с аудиторией на деловых мероприятиях'
    },
    {
      icon: 'Star',
      title: 'Детские праздники',
      description: 'Интерактивные программы с аниматорами и яркими эмоциями для детей'
    }
  ];

  const portfolio = [
    { event: 'Свадьба Анны и Дмитрия', guests: 120, date: 'Июнь 2024' },
    { event: 'Корпоратив IT-компании', guests: 80, date: 'Май 2024' },
    { event: 'День рождения 30 лет', guests: 50, date: 'Апрель 2024' },
    { event: 'Детский праздник', guests: 25, date: 'Март 2024' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Я свяжусь с вами в ближайшее время!');
    setFormData({ name: '', phone: '', email: '', eventType: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
              <Icon name="Mic2" size={64} className="text-purple-600" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
            Александр Волков
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light">
            Профессиональный ведущий мероприятий
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Более 8 лет опыта • 500+ успешных мероприятий • Индивидуальный подход к каждому событию
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Заказать мероприятие
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="ArrowDown" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>

          <div className="mt-16 flex gap-6 justify-center">
            <a href="tel:+79991234567" className="text-white hover:scale-110 transition-transform">
              <Icon name="Phone" size={28} />
            </a>
            <a href="mailto:host@example.com" className="text-white hover:scale-110 transition-transform">
              <Icon name="Mail" size={28} />
            </a>
            <a href="#" className="text-white hover:scale-110 transition-transform">
              <Icon name="Instagram" size={28} />
            </a>
            <a href="#" className="text-white hover:scale-110 transition-transform">
              <Icon name="Youtube" size={28} />
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Мои услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Провожу мероприятия любого формата с максимальной отдачей и профессионализмом
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1 border-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Почему выбирают меня
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">8+ лет опыта</h3>
              <p className="text-muted-foreground">Профессионально провожу мероприятия с 2016 года</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">500+ событий</h3>
              <p className="text-muted-foreground">Успешно проведенных мероприятий разного формата</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">100% отдача</h3>
              <p className="text-muted-foreground">Индивидуальный подход и внимание к деталям</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Недавние мероприятия
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {portfolio.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Calendar" size={20} className="text-purple-600" />
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="font-bold mb-2">{item.event}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Users" size={16} />
                    <span>{item.guests} гостей</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 text-white">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Заказать мероприятие
              </h2>
              <p className="text-lg opacity-90">
                Оставьте заявку, и я свяжусь с вами для обсуждения деталей
              </p>
            </div>

            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      placeholder="Как к вам обращаться?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input
                        type="tel"
                        placeholder="+7 999 999-99-99"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Тип мероприятия</label>
                    <Input
                      placeholder="Свадьба, корпоратив, день рождения..."
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашем мероприятии: дата, количество гостей, пожелания..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 text-center text-white">
              <p className="mb-4 text-lg">Или свяжитесь напрямую:</p>
              <div className="flex flex-wrap gap-6 justify-center">
                <a href="tel:+79991234567" className="flex items-center gap-2 hover:underline">
                  <Icon name="Phone" size={20} />
                  +7 (999) 123-45-67
                </a>
                <a href="mailto:host@example.com" className="flex items-center gap-2 hover:underline">
                  <Icon name="Mail" size={20} />
                  host@example.com
                </a>
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <Icon name="Instagram" size={20} />
                  @alexandr_host
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Александр Волков • Профессиональный ведущий мероприятий
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
