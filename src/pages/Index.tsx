import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const services = [
    {
      title: 'Свадьбы',
      description: 'Создам неповторимую атмосферу вашего важного дня. От выкупа невесты до торжественной части.',
      icon: 'Heart'
    },
    {
      title: 'Корпоративы',
      description: 'Профессиональное проведение корпоративных мероприятий любого масштаба.',
      icon: 'Briefcase'
    },
    {
      title: 'Дни рождения',
      description: 'Яркие юбилеи и праздники для детей и взрослых. Игры, конкурсы, развлечения.',
      icon: 'Cake'
    },
    {
      title: 'Тематические вечеринки',
      description: 'Концепция, сценарий и проведение тематических мероприятий на высшем уровне.',
      icon: 'PartyPopper'
    }
  ];

  const portfolio = [
    {
      id: 1,
      title: 'Свадьба Анны и Максима',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80'
    },
    {
      id: 2,
      title: 'Корпоратив IT-компании',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80'
    },
    {
      id: 3,
      title: 'Юбилей 50 лет',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80'
    }
  ];

  const pricing = [
    {
      title: 'Базовый',
      price: '25 000 ₽',
      duration: '3 часа',
      features: [
        'Проведение мероприятия',
        'Базовый сценарий',
        'Музыкальное сопровождение',
        'Фотозона (по желанию)'
      ]
    },
    {
      title: 'Стандарт',
      price: '45 000 ₽',
      duration: '5 часов',
      features: [
        'Всё из базового',
        'Индивидуальный сценарий',
        'Конкурсы и игры',
        'Профессиональный звук',
        'Координация программы'
      ],
      popular: true
    },
    {
      title: 'Премиум',
      price: '75 000 ₽',
      duration: '7 часов',
      features: [
        'Всё из стандарта',
        'Эксклюзивный сценарий',
        'Артисты и шоу-программы',
        'Световое оформление',
        'Полная координация события',
        'Репетиция'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            EventHost
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Цены</a>
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                Ваш праздник —{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  моя страсть
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональный ведущий с 8-летним опытом. Более 300 проведённых мероприятий. 
                Создаю атмосферу, которая запомнится на всю жизнь.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать дату
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть портфолио
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">300+</div>
                  <div className="text-sm text-muted-foreground">Мероприятий</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-secondary">8</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Счастливых клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/a3999e4a-753a-4631-9ec5-61f2b3f2ecda/files/b43fa0b0-dd1f-4382-ab29-7646cb5f2522.jpg" 
                alt="Ведущий мероприятий" 
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Обо мне</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждое мероприятие — это уникальная история, которую мы создаём вместе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold">Профессионализм</h3>
                <p className="text-muted-foreground">
                  Обучался у лучших ведущих страны. Постоянно совершенствую навыки и изучаю новые форматы.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-colors hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold">Креативность</h3>
                <p className="text-muted-foreground">
                  Каждое мероприятие разрабатываю индивидуально, учитывая все пожелания и особенности.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-accent transition-colors hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold">Энергия</h3>
                <p className="text-muted-foreground">
                  Умею зажечь любую аудиторию и создать атмосферу праздника с первых минут.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Провожу мероприятия любого формата и масштаба
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name={service.icon as any} size={28} className="text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-heading font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Посмотрите, как проходят мои мероприятия
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((video) => (
              <div key={video.id} className="group cursor-pointer" onClick={() => setActiveVideo(video.id)}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Play" size={32} className="text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-heading font-semibold">{video.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-2 transition-all hover:shadow-xl ${
                  plan.popular 
                    ? 'border-primary shadow-lg scale-105' 
                    : 'border-border hover:border-primary'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-2">{plan.title}</h3>
                    <div className="text-4xl font-heading font-bold text-primary mb-1">{plan.price}</div>
                    <div className="text-muted-foreground">{plan.duration}</div>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Готовы создать незабываемый праздник?
          </h2>
          <p className="text-xl opacity-90">
            Свяжитесь со мной, чтобы обсудить детали вашего мероприятия
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-50 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              EventHost
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Icon name="Send" size={20} />
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 EventHost. Все права защищены.
            </div>
          </div>
        </div>
      </footer>

      {activeVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="max-w-4xl w-full aspect-video bg-black rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${portfolio.find(v => v.id === activeVideo)?.videoId}?autoplay=1`}
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
