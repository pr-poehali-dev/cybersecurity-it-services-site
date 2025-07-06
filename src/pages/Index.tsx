import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-navy via-cyber-dark to-black text-white">
      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Icon
              name="Shield"
              className="h-8 w-8 text-cyber-blue animate-glow"
            />
            <h1 className="text-2xl font-bold text-cyber-blue">CyberGuard</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-cyber-blue transition-colors">
              Главная
            </a>
            <a
              href="#services"
              className="hover:text-cyber-blue transition-colors"
            >
              Услуги
            </a>
            <a
              href="#consulting"
              className="hover:text-cyber-blue transition-colors"
            >
              Консультации
            </a>
            <a
              href="#about"
              className="hover:text-cyber-blue transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="hover:text-cyber-blue transition-colors"
            >
              Контакты
            </a>
          </div>
          <Button className="bg-cyber-blue hover:bg-cyber-blue/80 text-cyber-navy font-semibold">
            Связаться
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <Badge className="bg-cyber-blue/20 text-cyber-blue border-cyber-blue/50">
                🛡️ Защита следующего уровня
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Кибербезопасность
                <span className="text-cyber-blue animate-pulse-cyber">
                  {" "}
                  & IT
                </span>
                <br />
                Услуги
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Профессиональная защита вашего бизнеса от киберугроз. Аудит
                безопасности, пентестинг и обучение сотрудников.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-cyber-blue hover:bg-cyber-blue/80 text-cyber-navy font-semibold"
              >
                <Icon name="Shield" className="mr-2 h-5 w-5" />
                Получить аудит
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10"
              >
                <Icon name="Play" className="mr-2 h-5 w-5" />
                Смотреть видео
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-cyber-blue/20 rounded-lg blur-xl animate-pulse-cyber"></div>
            <img
              src="/img/913dccbd-0a07-434e-90ab-91ae0567f192.jpg"
              alt="Cybersecurity Shield"
              className="relative z-10 w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 bg-cyber-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Наши <span className="text-cyber-blue">Услуги</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Комплексные решения для защиты вашей IT-инфраструктуры
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-cyber-navy/50 border-cyber-blue/30 hover:border-cyber-blue/70 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-blue/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-cyber-blue/20 rounded-lg">
                    <Icon name="Search" className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <div>
                    <CardTitle className="text-white">
                      Аудит безопасности
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Комплексная проверка
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Глубокий анализ вашей IT-инфраструктуры для выявления
                  уязвимостей и угроз безопасности.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    Анализ
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    Отчеты
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    Рекомендации
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-cyber-navy/50 border-cyber-blue/30 hover:border-cyber-blue/70 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-blue/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-cyber-blue/20 rounded-lg">
                    <Icon name="Zap" className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Пентестинг</CardTitle>
                    <CardDescription className="text-gray-400">
                      Тестирование на проникновение
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Имитация атак злоумышленников для проверки реальной
                  защищенности ваших систем.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    Тестирование
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    Уязвимости
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    Защита
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-cyber-navy/50 border-cyber-blue/30 hover:border-cyber-blue/70 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-blue/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-cyber-blue/20 rounded-lg">
                    <Icon name="Shield" className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Защита от DDoS</CardTitle>
                    <CardDescription className="text-gray-400">
                      Мониторинг и защита
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Защита от распределенных атак и непрерывный мониторинг сетевой
                  активности.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    Мониторинг
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    DDoS
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    24/7
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-cyber-navy/50 border-cyber-blue/30 hover:border-cyber-blue/70 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-blue/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-cyber-blue/20 rounded-lg">
                    <Icon name="Users" className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <div>
                    <CardTitle className="text-white">
                      Обучение сотрудников
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Повышение осведомленности
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Тренинги и семинары по кибербезопасности для вашей команды.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    Тренинги
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    Семинары
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    Сертификация
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-cyber-navy/50 border-cyber-blue/30 hover:border-cyber-blue/70 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-blue/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-cyber-blue/20 rounded-lg">
                    <Icon name="Settings" className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <div>
                    <CardTitle className="text-white">IT-консалтинг</CardTitle>
                    <CardDescription className="text-gray-400">
                      Стратегическое планирование
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Консультации по построению безопасной IT-архитектуры и выбору
                  решений.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    Консультации
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    Архитектура
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    Стратегия
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-cyber-navy/50 border-cyber-blue/30 hover:border-cyber-blue/70 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-blue/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-cyber-blue/20 rounded-lg">
                    <Icon
                      name="AlertTriangle"
                      className="h-6 w-6 text-cyber-blue"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-white">
                      Incident Response
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Быстрое реагирование
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Оперативное реагирование на инциденты безопасности и
                  восстановление систем.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    Экстренно
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    Восстановление
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyber-blue/20 text-cyber-blue"
                  >
                    Анализ
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section id="consulting" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Бесплатная <span className="text-cyber-blue">Консультация</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Получите персональную консультацию по вопросам кибербезопасности
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-cyber-blue/20 rounded-lg">
                    <Icon
                      name="CheckCircle"
                      className="h-5 w-5 text-cyber-blue"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Анализ текущего состояния
                    </h3>
                    <p className="text-gray-300">
                      Оценим уровень защищенности вашей компании
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-cyber-blue/20 rounded-lg">
                    <Icon
                      name="CheckCircle"
                      className="h-5 w-5 text-cyber-blue"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Персональные рекомендации
                    </h3>
                    <p className="text-gray-300">
                      Составим план улучшения безопасности
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-cyber-blue/20 rounded-lg">
                    <Icon
                      name="CheckCircle"
                      className="h-5 w-5 text-cyber-blue"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Бюджетирование
                    </h3>
                    <p className="text-gray-300">
                      Поможем оптимизировать расходы на безопасность
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-cyber-navy/30 p-6 rounded-lg border border-cyber-blue/20">
                <h4 className="text-lg font-semibold mb-4 text-cyber-blue">
                  Что входит в консультацию:
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" className="h-4 w-4 text-cyber-blue" />
                    <span>Аудит безопасности (экспресс-анализ)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" className="h-4 w-4 text-cyber-blue" />
                    <span>Оценка рисков</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" className="h-4 w-4 text-cyber-blue" />
                    <span>План действий</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Dot" className="h-4 w-4 text-cyber-blue" />
                    <span>Ответы на вопросы</span>
                  </li>
                </ul>
              </div>
            </div>

            <Card className="bg-cyber-navy/50 border-cyber-blue/30">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  Записаться на консультацию
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Заполните форму и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Имя *
                  </label>
                  <Input
                    className="bg-cyber-dark/50 border-cyber-blue/30 text-white"
                    placeholder="Ваше имя"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Email *
                  </label>
                  <Input
                    className="bg-cyber-dark/50 border-cyber-blue/30 text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Телефон *
                  </label>
                  <Input
                    className="bg-cyber-dark/50 border-cyber-blue/30 text-white"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Компания
                  </label>
                  <Input
                    className="bg-cyber-dark/50 border-cyber-blue/30 text-white"
                    placeholder="Название компании"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Описание задачи
                  </label>
                  <Textarea
                    className="bg-cyber-dark/50 border-cyber-blue/30 text-white"
                    placeholder="Расскажите о ваших задачах в области кибербезопасности..."
                  />
                </div>
                <Button className="w-full bg-cyber-blue hover:bg-cyber-blue/80 text-cyber-navy font-semibold">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Записаться на консультацию
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-cyber-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              О <span className="text-cyber-blue">Нас</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Команда экспертов с многолетним опытом в области кибербезопасности
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-cyber-blue/20 rounded-lg flex items-center justify-center">
                    <Icon name="Award" className="h-8 w-8 text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyber-blue">10+</h3>
                    <p className="text-gray-300">лет опыта</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-cyber-blue/20 rounded-lg flex items-center justify-center">
                    <Icon name="Users" className="h-8 w-8 text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyber-blue">200+</h3>
                    <p className="text-gray-300">защищенных компаний</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-cyber-blue/20 rounded-lg flex items-center justify-center">
                    <Icon name="Shield" className="h-8 w-8 text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyber-blue">
                      99.9%
                    </h3>
                    <p className="text-gray-300">успешных проектов</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Наши преимущества:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="h-5 w-5 text-cyber-blue mt-1"
                    />
                    <span>
                      Сертифицированные специалисты в области кибербезопасности
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="h-5 w-5 text-cyber-blue mt-1"
                    />
                    <span>
                      Использование современных методологий и инструментов
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="h-5 w-5 text-cyber-blue mt-1"
                    />
                    <span>Индивидуальный подход к каждому клиенту</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="h-5 w-5 text-cyber-blue mt-1"
                    />
                    <span>Круглосуточная поддержка и быстрое реагирование</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src="/img/0d5e6dfc-e95f-4e61-9f9a-1e109c2c919a.jpg"
                  alt="Cybersecurity Audit"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="bg-cyber-navy/50 p-6 rounded-lg border border-cyber-blue/20">
                  <h4 className="text-lg font-semibold mb-2 text-cyber-blue">
                    Наша миссия
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Делать киберпространство безопаснее для всех
                  </p>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="bg-cyber-navy/50 p-6 rounded-lg border border-cyber-blue/20">
                  <h4 className="text-lg font-semibold mb-2 text-cyber-blue">
                    Наши ценности
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Профессионализм, надежность, инновации
                  </p>
                </div>
                <img
                  src="/img/1b983639-78c8-46d3-99c8-5235fe781cc1.jpg"
                  alt="Network Protection"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Связаться с <span className="text-cyber-blue">Нами</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Готовы обсудить ваш проект? Свяжитесь с нами любым удобным
              способом
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-cyber-navy/50 border-cyber-blue/30 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-cyber-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Phone" className="h-8 w-8 text-cyber-blue" />
                </div>
                <CardTitle className="text-white">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Звоните в любое время</p>
                <p className="text-cyber-blue font-semibold text-xl">
                  +7 (495) 123-45-67
                </p>
                <p className="text-gray-400 text-sm mt-2">Пн-Пт: 9:00-18:00</p>
              </CardContent>
            </Card>

            <Card className="bg-cyber-navy/50 border-cyber-blue/30 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-cyber-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mail" className="h-8 w-8 text-cyber-blue" />
                </div>
                <CardTitle className="text-white">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Пишите нам</p>
                <p className="text-cyber-blue font-semibold text-xl">
                  info@cyberguard.ru
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Ответим в течение часа
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cyber-navy/50 border-cyber-blue/30 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-cyber-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="h-8 w-8 text-cyber-blue" />
                </div>
                <CardTitle className="text-white">Офис</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Приходите к нам</p>
                <p className="text-cyber-blue font-semibold">
                  Москва, ул. Тверская, д. 1
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  БЦ "Технопарк", 15 этаж
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyber-navy/80 px-6 py-12 border-t border-cyber-blue/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" className="h-8 w-8 text-cyber-blue" />
                <h3 className="text-xl font-bold text-cyber-blue">
                  CyberGuard
                </h3>
              </div>
              <p className="text-gray-400">
                Профессиональная защита вашего бизнеса от киберугроз
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center hover:bg-cyber-blue/30 transition-colors cursor-pointer">
                  <Icon name="Mail" className="h-5 w-5 text-cyber-blue" />
                </div>
                <div className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center hover:bg-cyber-blue/30 transition-colors cursor-pointer">
                  <Icon name="Phone" className="h-5 w-5 text-cyber-blue" />
                </div>
                <div className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center hover:bg-cyber-blue/30 transition-colors cursor-pointer">
                  <Icon name="Globe" className="h-5 w-5 text-cyber-blue" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyber-blue transition-colors"
                  >
                    Аудит безопасности
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyber-blue transition-colors"
                  >
                    Пентестинг
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyber-blue transition-colors"
                  >
                    Защита от DDoS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyber-blue transition-colors"
                  >
                    Обучение
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyber-blue transition-colors"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyber-blue transition-colors"
                  >
                    Команда
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyber-blue transition-colors"
                  >
                    Карьера
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyber-blue transition-colors"
                  >
                    Новости
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" className="h-4 w-4 text-cyber-blue" />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" className="h-4 w-4 text-cyber-blue" />
                  <span>info@cyberguard.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" className="h-4 w-4 text-cyber-blue" />
                  <span>Москва, ул. Тверская, д. 1</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cyber-blue/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 CyberGuard. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
