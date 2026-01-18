import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-07-23T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#e8ddd0] overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          
          <div className="bg-[#2a1f1a] text-[#f5ede4] rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 text-center">
              <h1 className="font-cormorant text-4xl mb-1 tracking-wider">ИВАН</h1>
              <div className="text-2xl my-2">&</div>
              <h1 className="font-cormorant text-4xl mb-4 tracking-wider">ЕЛИЗАВЕТА</h1>
              <p className="text-sm opacity-80">23/ 07/ 2025</p>
            </div>
            <div className="relative h-96">
              <img 
                src="https://cdn.poehali.dev/projects/b38b88a5-07eb-4411-b8a7-b860fa8f20f7/files/e1f79def-4ca7-41fa-8e53-d5a01f50054a.jpg" 
                alt="Couple" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center text-black px-4 py-6 bg-[#e8ddd0] rounded-3xl">
              <p className="text-sm leading-relaxed">
                Создам сайт-приглашение<br/>
                на вашу свадьбу.<br/>
                Для связи пишите<br/>
                в telegram: @yana_sereda<br/>
                inst: @seredayana_design
              </p>
            </div>

            <div className="bg-[#f5ede4] text-black rounded-3xl shadow-2xl p-8 text-center">
              <h2 className="font-cormorant text-3xl mb-6 tracking-wider">ДОРОГИЕ ГОСТИ!</h2>
              <p className="text-sm leading-relaxed mb-6">
                Совсем скоро наступит день, который будет<br/>
                для нас особенным - ДЕНЬ НАШЕЙ СВАДЬБЫ!<br/>
                И, конечно, нам хочется разделить его с самыми<br/>
                близкими нам людьми, поэтому приглашаем Вас<br/>
                разделить с нами этот прекрасный праздник!
              </p>
              <div className="mt-8">
                <p className="text-xs mb-4 tracking-wider">ИЮЛЬ 2025</p>
                <div className="grid grid-cols-7 gap-2 text-xs mb-4">
                  <div className="font-semibold">ПН</div>
                  <div className="font-semibold">ВТ</div>
                  <div className="font-semibold">СР</div>
                  <div className="font-semibold">ЧТ</div>
                  <div className="font-semibold">ПТ</div>
                  <div className="font-semibold">СБ</div>
                  <div className="font-semibold">ВС</div>
                  {[...Array(2)].map((_, i) => <div key={`empty-${i}`}></div>)}
                  {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22].map(day => (
                    <div key={day} className="py-1">{day}</div>
                  ))}
                  <div className="py-1 relative">
                    <div>23</div>
                    <Icon name="Heart" className="w-4 h-4 absolute top-0 left-1/2 -translate-x-1/2 fill-black" />
                  </div>
                  {[24,25,26,27,28,29,30,31].map(day => (
                    <div key={day} className="py-1">{day}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2a1f1a] text-[#f5ede4] rounded-3xl shadow-2xl p-8">
            <h2 className="font-cormorant text-3xl text-center mb-8 tracking-wider">TIMING OF THE DAY</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl font-light">18:00</div>
                  <div className="text-sm">- СБОР ГОСТЕЙ</div>
                </div>
                <div className="relative h-32 rounded-2xl overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/b38b88a5-07eb-4411-b8a7-b860fa8f20f7/files/3d13941a-23ca-477e-8f95-f94753ca1366.jpg"
                    alt="Gathering"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs mt-2 opacity-80">просим посетить закрепленного за вручением<br/>на бульваре Космонавтов с другими гостями</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl font-light">18:30</div>
                  <div className="text-sm">- ЦЕРЕМОНИЯ</div>
                </div>
                <div className="relative h-32 rounded-2xl overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/b38b88a5-07eb-4411-b8a7-b860fa8f20f7/files/eb26c4b8-d364-4145-85c9-d5ce3735c4a1.jpg"
                    alt="Ceremony"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs mt-2 opacity-80">вас ждёт официальная торжественная<br/>церемония оригинального заключения брака</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl font-light">19:00 - 01:00</div>
                  <div className="text-sm">- БАНКЕТ</div>
                </div>
                <div className="relative h-32 rounded-2xl overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/b38b88a5-07eb-4411-b8a7-b860fa8f20f7/files/e1f79def-4ca7-41fa-8e53-d5a01f50054a.jpg"
                    alt="Banquet"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs mt-2 opacity-80">время вкусной еды, танцев и развлечений</p>
              </div>
            </div>
          </div>

          <div className="bg-[#f5ede4] text-black rounded-3xl shadow-2xl p-8">
            <h2 className="font-cormorant text-3xl text-center mb-6 tracking-wider">LOCATION</h2>
            
            <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
              <img 
                src="https://cdn.poehali.dev/projects/b38b88a5-07eb-4411-b8a7-b860fa8f20f7/files/eb26c4b8-d364-4145-85c9-d5ce3735c4a1.jpg"
                alt="Venue"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="text-white text-4xl font-bold">FOOD STORY</div>
              </div>
            </div>

            <p className="text-sm text-center mb-4">
              Банкет под руп "Food Story" - Екатеринбург<br/>
              г.Азарова Квартал 2, Сибирский тракт, 10 ст 2
            </p>

            <div className="flex justify-center">
              <Button className="bg-[#2a1f1a] text-[#f5ede4] hover:bg-[#2a1f1a]/90 rounded-full px-8">
                Смотреть на карте
              </Button>
            </div>
          </div>

          <div className="bg-[#f5ede4] text-black rounded-3xl shadow-2xl p-8">
            <h2 className="font-cormorant text-3xl text-center mb-6 tracking-wider">DRESS CODE</h2>
            
            <p className="text-sm text-center mb-6">
              Нам будет приятно, если вы поддержите и<br/>
              стилистику нашей свадьбы и его основную<br/>
              цветовую гамму: песчаные и его оттенки<br/>
              (вся коричнево-бежево-кремовая гамма).
            </p>

            <div className="flex justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#1a1612] border-2 border-black"></div>
              <div className="w-12 h-12 rounded-full bg-[#4a3426] border-2 border-black"></div>
              <div className="w-12 h-12 rounded-full bg-[#b8916f] border-2 border-black"></div>
              <div className="w-12 h-12 rounded-full bg-[#d4c4b0] border-2 border-black"></div>
            </div>

            <p className="text-xs text-center mb-6 opacity-80">Вдохновляйтесь для вашего образа</p>

            <div className="grid grid-cols-3 gap-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/b38b88a5-07eb-4411-b8a7-b860fa8f20f7/files/e1f79def-4ca7-41fa-8e53-d5a01f50054a.jpg"
                  alt="Outfit 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/b38b88a5-07eb-4411-b8a7-b860fa8f20f7/files/3d13941a-23ca-477e-8f95-f94753ca1366.jpg"
                  alt="Outfit 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/b38b88a5-07eb-4411-b8a7-b860fa8f20f7/files/eb26c4b8-d364-4145-85c9-d5ce3735c4a1.jpg"
                  alt="Outfit 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#2a1f1a] text-[#f5ede4] rounded-3xl shadow-2xl p-8 text-center">
            <h2 className="font-cormorant text-3xl mb-6 tracking-wider">TELEGRAM</h2>
            <p className="text-sm leading-relaxed mb-6">
              Для удобной координации и быстрой связи мы<br/>
              запустили наш ТГ канал И БОТ (будут также<br/>
              доступны все фото, чтобы вы могли поделиться ими,<br/>
              и видео) с трансляцией и событиями
            </p>
            <Button className="bg-[#f5ede4] text-black hover:bg-[#f5ede4]/90 rounded-full px-8">
              Чат гостей
            </Button>
          </div>

          <div className="bg-[#2a1f1a] text-[#f5ede4] rounded-3xl shadow-2xl p-8 text-center">
            <h2 className="font-cormorant text-3xl mb-6 tracking-wider">CONTACTS</h2>
            <p className="text-sm mb-6">
              По всем вопросам и предложениям Вы всегда<br/>
              можете обратиться к нашему организатору
            </p>
            
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#f5ede4]/20">
              <img 
                src="https://cdn.poehali.dev/projects/b38b88a5-07eb-4411-b8a7-b860fa8f20f7/files/e1f79def-4ca7-41fa-8e53-d5a01f50054a.jpg"
                alt="Organizer"
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-lg mb-2">ЮЛИЯ</p>
            <a href="tel:+79993883633" className="text-sm opacity-80 hover:opacity-100">
              +7 (999) 388-36-33
            </a>
          </div>

          <div className="bg-[#f5ede4] text-black rounded-3xl shadow-2xl p-8 text-center md:col-span-2">
            <h2 className="font-cormorant text-3xl mb-6 tracking-wider">DETAILS</h2>
            
            <p className="text-sm leading-relaxed mb-6">
              Ваше присутствие - самый лучший подарок для нас<br/>
              необходимое счастье и возможность провести<br/>
              лично с вами большое торжество!
            </p>

            <p className="text-xs mb-6 opacity-80">
              Просим не оформлять себе букеты - цветы.<br/>
              Выбор "подаренных" букетов будет присутствовать на торжестве
            </p>

            <p className="text-xs mb-8 opacity-80">
              Пожалуйста, подтвердите свое присутствие<br/>
              до 01.07.2025 с помощью ответа по кнопке<br/>
              ниже, либо напишите заранее или позвоните<br/>
              • Если вас что-то интересует - спрашивайте
            </p>

            <Button className="bg-[#2a1f1a] text-[#f5ede4] hover:bg-[#2a1f1a]/90 rounded-full px-8 mb-6">
              Ответить
            </Button>

            <div className="border-t border-black/20 pt-6">
              <p className="text-xs mb-4 tracking-wider">Будем рады увидеться с Вами!</p>
              <p className="text-xs mb-4 opacity-80">До встречи остается:</p>
              
              <div className="grid grid-cols-4 gap-3 max-w-xs mx-auto">
                <div>
                  <div className="text-xs opacity-60 mb-1">ДНЕЙ</div>
                  <div className="bg-[#2a1f1a] text-[#f5ede4] rounded-xl py-3 text-2xl font-light">
                    {timeLeft.days.toString().padStart(2, '0')}
                  </div>
                </div>
                <div>
                  <div className="text-xs opacity-60 mb-1">ЧАСОВ</div>
                  <div className="bg-[#2a1f1a] text-[#f5ede4] rounded-xl py-3 text-2xl font-light">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </div>
                </div>
                <div>
                  <div className="text-xs opacity-60 mb-1">МИНУТ</div>
                  <div className="bg-[#2a1f1a] text-[#f5ede4] rounded-xl py-3 text-2xl font-light">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </div>
                </div>
                <div>
                  <div className="text-xs opacity-60 mb-1">СЕКУНД</div>
                  <div className="bg-[#2a1f1a] text-[#f5ede4] rounded-xl py-3 text-2xl font-light">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 relative h-48 rounded-2xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/b38b88a5-07eb-4411-b8a7-b860fa8f20f7/files/e1f79def-4ca7-41fa-8e53-d5a01f50054a.jpg"
                alt="Couple photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;
