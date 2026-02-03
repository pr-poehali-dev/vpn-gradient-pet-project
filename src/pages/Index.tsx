import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const catPhrases = [
  "Мяу! Скидки тут! 🐱",
  "NoCap лучший! 💎",
  "Смотри кино без лагов! 🍿",
  "Анонимность — это мяуто! 🔒",
  "Я одобряю этот VPN! ✨",
  "Быстрее света! ⚡",
  "Твоя приватность защищена! 🛡️"
];

const Index = () => {
  const [catPhrase, setCatPhrase] = useState(catPhrases[0]);
  const [showPhrase, setShowPhrase] = useState(false);
  const [catVisible, setCatVisible] = useState(false);
  const [catFullyVisible, setCatFullyVisible] = useState(false);
  const hideTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCatVisible(true);
      setCatFullyVisible(true);
      setCatPhrase(catPhrases[Math.floor(Math.random() * catPhrases.length)]);
      setShowPhrase(true);
      
      setTimeout(() => {
        setShowPhrase(false);
        setTimeout(() => {
          setCatFullyVisible(false);
        }, 2000);
      }, 3000);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCatClick = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    if (!catFullyVisible) {
      setCatFullyVisible(true);
      setTimeout(() => {
        setCatPhrase(catPhrases[Math.floor(Math.random() * catPhrases.length)]);
        setShowPhrase(true);
        setTimeout(() => setShowPhrase(false), 3000);
      }, 500);
    } else {
      setCatPhrase(catPhrases[Math.floor(Math.random() * catPhrases.length)]);
      setShowPhrase(true);
      setTimeout(() => setShowPhrase(false), 3000);
    }

    hideTimeoutRef.current = window.setTimeout(() => {
      setCatFullyVisible(false);
    }, 10000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-scroll-fade').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const pricingPlans = [
    { period: '7 ДНЕЙ', price: '70₽', highlight: false },
    { period: '14 ДНЕЙ', price: '140₽', highlight: false },
    { period: '30 ДНЕЙ', price: '169₽', highlight: true, badge: 'ХИТ' },
    { period: '3 МЕСЯЦА', price: '507₽', highlight: false },
    { period: '6 МЕСЯЦЕВ', price: '1014₽', highlight: false },
    { period: '1 ГОД', price: '2056₽', highlight: true, badge: 'ХИТ' }
  ];

  const features = [
    { icon: 'Shield', title: 'Безопасность', desc: 'Современные методы шифрования для защиты ваших данных' },
    { icon: 'Zap', title: 'Скорость', desc: 'Оптимизированные серверы обеспечивают высокую скорость' },
    { icon: 'Youtube', title: 'YouTube без рекламы', desc: 'Смотрите любимый контент без навязчивой рекламы' },
    { icon: 'Tv', title: 'Аниме без рекламы', desc: 'Наслаждайтесь просмотром на популярных аниме-ресурсах' },
    { icon: 'Lock', title: 'XTLS шифрование', desc: 'Продвинутый протокол для максимальной скрытности' },
    { icon: 'Activity', title: 'Стабильность', desc: 'Наши серверы работают 24/7 с аптаймом 99.9%' },
    { icon: 'Globe', title: 'Доступность', desc: 'Обходите географические ограничения по всему миру' },
    { icon: 'Ghost', title: 'Полная анонимность', desc: 'Мы не ведём журналы вашей активности' }
  ];

  const locations = [
    { code: 'RU', name: 'Россия' },
    { code: 'KZ', name: 'Казахстан' },
    { code: 'SE', name: 'Швеция' },
    { code: 'DE', name: 'Германия' },
    { code: 'US', name: 'США' },
    { code: 'NL', name: 'Нидерланды' },
    { code: 'Skull', name: 'Секретная локация' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold">
            No<span className="gradient-text">Cap</span>
          </div>
          <Button variant="outline" className="gradient-bg border-0 text-white hover:opacity-90">
            <Icon name="Send" size={16} className="mr-2" />
            Поддержка
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <Badge className="mb-6 gradient-bg border-0 text-white px-4 py-2">
            <Icon name="Sparkles" size={14} className="mr-2" />
            Самый быстрый и анонимный
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Интернет без границ<br />
            <span className="gradient-text">с NoCap</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Максимальная скорость, полная анонимность и доступ к любому
            контенту. Попробуйте бесплатно прямо сейчас.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gradient-bg border-0 text-white text-lg px-8 py-6 hover:scale-105 transition-transform">
              Подключиться
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-slate-700 hover:border-primary">
              Получить пробный период
            </Button>
          </div>
        </div>

        <div 
          className={`fixed bottom-0 right-8 z-50 cursor-pointer transition-transform duration-700 ease-out ${
            catVisible ? (catFullyVisible ? 'translate-y-0' : 'translate-y-24') : 'translate-y-full'
          }`}
          onClick={handleCatClick}
        >
          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/projects/47dc99d3-64c6-4831-85fa-a16b9944f3e2/files/f73c55aa-9bad-4150-88bd-2a77793b9366.jpg"
              alt="Cat mascot"
              className="w-32 h-32 rounded-full object-cover shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-shadow"
            />
            {showPhrase && (
              <div className="absolute -top-16 -left-20 bg-white text-slate-900 px-4 py-2 rounded-2xl shadow-lg animate-fade-in whitespace-nowrap font-medium">
                {catPhrase}
                <div className="absolute bottom-0 right-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white" />
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-slate-950/50 animate-scroll-fade">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center mb-4">Тарифные планы</h2>
          <p className="text-slate-400 text-center mb-12">Выберите подходящий для вас период</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <Card 
                key={idx}
                className={`relative p-6 transition-all duration-300 hover:scale-105 ${
                  plan.highlight 
                    ? 'bg-gradient-to-br from-emerald-500/20 to-green-500/20 border-primary' 
                    : 'bg-card border-slate-800'
                }`}
              >
                {plan.badge && (
                  <Badge className="absolute -top-3 right-4 gradient-bg border-0 text-white">
                    {plan.badge}
                  </Badge>
                )}
                
                <div className="text-sm text-slate-400 mb-2">{plan.period}</div>
                <div className="text-5xl font-black mb-6 gradient-text">{plan.price}</div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                    Высокая скорость
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                    Безлимитный трафик
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                    До 3 устройств
                  </li>
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.highlight 
                      ? 'gradient-bg border-0 text-white' 
                      : 'bg-transparent border border-slate-700 hover:border-primary'
                  }`}
                >
                  Купить
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 animate-scroll-fade">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-center mb-4">Почему NoCap?</h2>
          <p className="text-slate-400 text-center mb-12">Технологии, которые работают на вас</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card 
                key={idx}
                className="p-6 bg-card border-slate-800 hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="py-20 px-4 bg-slate-950/50 animate-scroll-fade">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-black mb-12">Доступные локации</h2>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {locations.map((loc, idx) => (
              <Button
                key={idx}
                variant="outline"
                size="lg"
                className={`text-lg px-6 py-6 border-slate-800 hover:border-primary transition-all ${
                  loc.code === 'Skull' ? 'gradient-bg border-0 text-white' : ''
                }`}
              >
                <Icon 
                  name={loc.code === 'Skull' ? 'Skull' : 'MapPin'} 
                  size={20} 
                  className="mr-2" 
                />
                {loc.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-slate-800 animate-scroll-fade">
        <div className="container mx-auto text-center">
          <p className="text-slate-500 mb-4">© 2026 NoCap. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
