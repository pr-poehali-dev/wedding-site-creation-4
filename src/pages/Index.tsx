import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [rsvpForm, setRsvpForm] = useState({ name: '', guests: '', message: '' });

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const weddingEvents = [
    {
      date: '15',
      month: 'Июнь',
      year: '2026',
      time: '15:00',
      title: 'Церемония',
      location: 'Усадьба "Золотой Век"',
      description: 'Торжественная церемония бракосочетания в окружении близких',
      icon: 'Heart'
    },
    {
      date: '15',
      month: 'Июнь',
      year: '2026',
      time: '17:00',
      title: 'Банкет',
      location: 'Бальный зал',
      description: 'Праздничный ужин, танцы и веселье до утра',
      icon: 'PartyPopper'
    },
    {
      date: '16',
      month: 'Июнь',
      year: '2026',
      time: '12:00',
      title: 'Бранч',
      location: 'Терраса с видом на сад',
      description: 'Лёгкий завтрак для близких друзей и семьи',
      icon: 'Coffee'
    }
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/b38b88a5-07eb-4411-b8a7-b860fa8f20f7/files/e1f79def-4ca7-41fa-8e53-d5a01f50054a.jpg',
    'https://cdn.poehali.dev/projects/b38b88a5-07eb-4411-b8a7-b860fa8f20f7/files/3d13941a-23ca-477e-8f95-f94753ca1366.jpg',
    'https://cdn.poehali.dev/projects/b38b88a5-07eb-4411-b8a7-b860fa8f20f7/files/eb26c4b8-d364-4145-85c9-d5ce3735c4a1.jpg'
  ];

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${rsvpForm.name}! Ваша заявка принята.`);
    setRsvpForm({ name: '', guests: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-ivory">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gold/20 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-cormorant font-bold text-gold">А & М</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'couple', 'story', 'calendar', 'gallery', 'details', 'rsvp', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-montserrat uppercase tracking-wider transition-colors ${
                    activeSection === section ? 'text-gold font-semibold' : 'text-navy hover:text-gold'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'couple' && 'О Паре'}
                  {section === 'story' && 'История'}
                  {section === 'calendar' && 'Календарь'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'details' && 'Детали'}
                  {section === 'rsvp' && 'RSVP'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <button className="md:hidden text-navy">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.2)), url('https://cdn.poehali.dev/projects/b38b88a5-07eb-4411-b8a7-b860fa8f20f7/files/e1f79def-4ca7-41fa-8e53-d5a01f50054a.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/50 via-transparent to-ivory/80" />
        <div className="relative z-10 text-center animate-fade-in px-4">
          <div className="mb-6">
            <div className="w-20 h-[1px] bg-gold mx-auto mb-4" />
            <p className="text-gold text-sm uppercase tracking-[0.3em] font-montserrat">Наша свадьба</p>
            <div className="w-20 h-[1px] bg-gold mx-auto mt-4" />
          </div>
          <h1 className="font-cormorant text-7xl md:text-9xl font-bold text-navy mb-4">
            Александра<br/>
            <span className="text-gold">&</span><br/>
            Михаил
          </h1>
          <p className="text-2xl text-navy/80 font-montserrat tracking-wider mb-8">15 июня 2026</p>
          <Button
            onClick={() => scrollToSection('rsvp')}
            className="bg-gold hover:bg-gold-light text-white px-8 py-6 text-lg rounded-none shadow-lg hover:shadow-xl transition-all"
          >
            Подтвердить присутствие
          </Button>
        </div>
      </section>

      <section id="couple" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-navy mb-4">О Нас</h2>
            <div className="w-24 h-[2px] bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-2 border-gold/20 shadow-lg hover:shadow-xl transition-shadow animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-champagne rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="User" size={48} className="text-gold" />
                </div>
                <h3 className="font-cormorant text-3xl font-bold text-navy mb-2">Александра</h3>
                <p className="text-gold font-montserrat mb-4">Невеста</p>
                <p className="text-navy/70 leading-relaxed">
                  Элегантная, утончённая и полная жизни. Александра — архитектор по образованию, 
                  любит искусство, путешествия и создавать уют в каждой детали.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-gold/20 shadow-lg hover:shadow-xl transition-shadow animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-champagne rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="User" size={48} className="text-gold" />
                </div>
                <h3 className="font-cormorant text-3xl font-bold text-navy mb-2">Михаил</h3>
                <p className="text-gold font-montserrat mb-4">Жених</p>
                <p className="text-navy/70 leading-relaxed">
                  Надёжный, искренний и с прекрасным чувством юмора. Михаил — предприниматель, 
                  увлекается фотографией и всегда готов к новым приключениям.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="story" className="py-24 bg-champagne/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-navy mb-4">Наша История</h2>
            <div className="w-24 h-[2px] bg-gold mx-auto" />
          </div>
          <div className="space-y-12">
            <div className="flex gap-6 items-start animate-fade-in">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={28} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl font-bold text-navy mb-2">Первая встреча</h3>
                <p className="text-gold font-montserrat text-sm mb-2">Весна 2022</p>
                <p className="text-navy/70 leading-relaxed">
                  Всё началось на выставке современного искусства. Случайная встреча у одной картины 
                  переросла в разговор на несколько часов и обмен контактами.
                </p>
              </div>
            </div>
            <Separator className="bg-gold/20" />
            <div className="flex gap-6 items-start animate-fade-in">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={28} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl font-bold text-navy mb-2">Первое свидание</h3>
                <p className="text-gold font-montserrat text-sm mb-2">Лето 2022</p>
                <p className="text-navy/70 leading-relaxed">
                  Прогулка по набережной на закате, ужин в уютном ресторанчике и понимание, 
                  что это начало чего-то особенного.
                </p>
              </div>
            </div>
            <Separator className="bg-gold/20" />
            <div className="flex gap-6 items-start animate-fade-in">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <Icon name="Gem" size={28} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl font-bold text-navy mb-2">Предложение</h3>
                <p className="text-gold font-montserrat text-sm mb-2">Зима 2025</p>
                <p className="text-navy/70 leading-relaxed">
                  Романтическая поездка в горы, снежный пейзаж и предложение руки и сердца, 
                  которое навсегда изменило нашу жизнь.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="calendar" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-navy mb-4">Календарь События</h2>
            <div className="w-24 h-[2px] bg-gold mx-auto mb-6" />
            <p className="text-navy/70 font-montserrat max-w-2xl mx-auto">
              Расписание нашего праздничного дня
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {weddingEvents.map((event, index) => (
              <Card key={index} className="border-2 border-gold/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 animate-scale-in">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-gold/10 rounded-lg p-4 mb-4">
                      <Icon name={event.icon as any} size={40} className="text-gold" />
                    </div>
                    <div className="font-cormorant text-5xl font-bold text-gold mb-2">{event.date}</div>
                    <div className="text-navy/70 font-montserrat uppercase tracking-wider text-sm">
                      {event.month} {event.year}
                    </div>
                  </div>
                  <Badge className="w-full justify-center bg-champagne text-navy mb-4 py-2">
                    {event.time}
                  </Badge>
                  <h3 className="font-cormorant text-2xl font-bold text-navy text-center mb-2">{event.title}</h3>
                  <p className="text-gold font-montserrat text-sm text-center mb-3">{event.location}</p>
                  <p className="text-navy/70 text-center text-sm leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-champagne/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-navy mb-4">Галерея</h2>
            <div className="w-24 h-[2px] bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((img, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all hover:scale-105 animate-scale-in"
              >
                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="details" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-navy mb-4">Детали</h2>
            <div className="w-24 h-[2px] bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gold/20 shadow-lg">
              <CardContent className="p-8">
                <Icon name="MapPin" size={32} className="text-gold mb-4" />
                <h3 className="font-cormorant text-2xl font-bold text-navy mb-3">Место проведения</h3>
                <p className="text-navy/70 mb-2">Усадьба "Золотой Век"</p>
                <p className="text-navy/60 text-sm">Московская область, Истринский район</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-gold/20 shadow-lg">
              <CardContent className="p-8">
                <Icon name="Clock" size={32} className="text-gold mb-4" />
                <h3 className="font-cormorant text-2xl font-bold text-navy mb-3">Дресс-код</h3>
                <p className="text-navy/70 mb-2">Элегантный вечерний</p>
                <p className="text-navy/60 text-sm">Цвета: золото, шампань, тёмно-синий</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-gold/20 shadow-lg">
              <CardContent className="p-8">
                <Icon name="Gift" size={32} className="text-gold mb-4" />
                <h3 className="font-cormorant text-2xl font-bold text-navy mb-3">Подарки</h3>
                <p className="text-navy/70 mb-2">Ваше присутствие — лучший подарок</p>
                <p className="text-navy/60 text-sm">При желании — денежный конверт</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-gold/20 shadow-lg">
              <CardContent className="p-8">
                <Icon name="Music" size={32} className="text-gold mb-4" />
                <h3 className="font-cormorant text-2xl font-bold text-navy mb-3">Развлечения</h3>
                <p className="text-navy/70 mb-2">Живая музыка и DJ</p>
                <p className="text-navy/60 text-sm">Танцы до утра, фотозона</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="rsvp" className="py-24 bg-navy">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-white mb-4">RSVP</h2>
            <div className="w-24 h-[2px] bg-gold mx-auto mb-6" />
            <p className="text-white/80 font-montserrat">
              Пожалуйста, подтвердите своё присутствие до 1 мая 2026
            </p>
          </div>
          <Card className="bg-white/95 border-2 border-gold/30 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleRSVP} className="space-y-6">
                <div>
                  <label className="block text-navy font-montserrat font-semibold mb-2">Ваше имя *</label>
                  <Input
                    required
                    value={rsvpForm.name}
                    onChange={(e) => setRsvpForm({ ...rsvpForm, name: e.target.value })}
                    className="border-gold/30 focus:border-gold"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-navy font-montserrat font-semibold mb-2">Количество гостей *</label>
                  <Input
                    required
                    type="number"
                    min="1"
                    value={rsvpForm.guests}
                    onChange={(e) => setRsvpForm({ ...rsvpForm, guests: e.target.value })}
                    className="border-gold/30 focus:border-gold"
                    placeholder="2"
                  />
                </div>
                <div>
                  <label className="block text-navy font-montserrat font-semibold mb-2">Сообщение (необязательно)</label>
                  <Textarea
                    value={rsvpForm.message}
                    onChange={(e) => setRsvpForm({ ...rsvpForm, message: e.target.value })}
                    className="border-gold/30 focus:border-gold min-h-[120px]"
                    placeholder="Ваши пожелания или особые требования..."
                  />
                </div>
                <Button type="submit" className="w-full bg-gold hover:bg-gold-light text-white py-6 text-lg shadow-lg">
                  Подтвердить присутствие
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-24 bg-champagne/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-navy mb-4">Контакты</h2>
            <div className="w-24 h-[2px] bg-gold mx-auto mb-8" />
            <p className="text-navy/70 mb-8 font-montserrat">
              По всем вопросам обращайтесь к нам или нашим координаторам
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a href="tel:+79991234567" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
                <Icon name="Phone" size={20} />
                <span className="font-montserrat">+7 (999) 123-45-67</span>
              </a>
              <a href="mailto:wedding@example.com" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
                <Icon name="Mail" size={20} />
                <span className="font-montserrat">wedding@example.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-navy py-12 text-center">
        <div className="container mx-auto px-4">
          <h3 className="font-cormorant text-4xl font-bold text-gold mb-2">А & М</h3>
          <p className="text-white/60 font-montserrat text-sm">15 июня 2026</p>
          <Separator className="bg-gold/20 my-6 max-w-xs mx-auto" />
          <p className="text-white/40 text-xs font-montserrat">С любовью создано для нашей свадьбы</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
