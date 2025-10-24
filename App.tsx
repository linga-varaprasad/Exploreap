import React, { useState } from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DestinationDetailScreen from './screens/DestinationDetailScreen';
import TripPlannerScreen from './screens/TripPlannerScreen';
import MapScreen from './screens/MapScreen';
import StoriesScreen from './screens/StoriesScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomNavBar, { Tab } from './components/BottomNavBar';
import ChatScreen from './screens/ChatScreen';

type AppScreen = 'welcome' | 'onboarding' | 'login' | 'main';
type MainScreen = Tab | 'destinationDetail' | 'chat';

const App: React.FC = () => {
  const [appScreen, setAppScreen] = useState<AppScreen>('welcome');
  const [mainScreen, setMainScreen] = useState<MainScreen>('Home');
  const [selectedDestinationId, setSelectedDestinationId] = useState<string | null>(null);

  const handleGetStarted = () => setAppScreen('onboarding');
  const handleOnboardingComplete = () => setAppScreen('login');
  const handleLogin = () => setAppScreen('main');
  const handleBackToOnboarding = () => setAppScreen('onboarding');

  const handleNavigate = (screen: MainScreen) => {
    setMainScreen(screen);
  };

  const handleSelectDestination = (id: string) => {
    setSelectedDestinationId(id);
    setMainScreen('destinationDetail');
  };
  
  const handleOpenChat = () => {
    setMainScreen('chat');
  };

  const handleBackFromDetail = () => {
    setSelectedDestinationId(null);
    setMainScreen('Home');
  };

  const handleBackFromChat = () => {
    setMainScreen('Home');
  };
  
  const renderMainContent = () => {
    switch (mainScreen) {
      case 'Home':
        return <HomeScreen onNavigate={handleNavigate} onSelectDestination={handleSelectDestination} />;
      case 'Map':
        return <MapScreen />;
      case 'Trips':
        return <TripPlannerScreen onBack={() => handleNavigate('Home')} />;
      case 'Stories':
        return <StoriesScreen />;
      case 'Profile':
        return <ProfileScreen />;
      case 'chat':
        return <ChatScreen onBack={handleBackFromChat} />;
      case 'destinationDetail':
        return (
          <DestinationDetailScreen
            destinationId={selectedDestinationId!}
            onBack={handleBackFromDetail}
            onNavigate={handleNavigate}
          />
        );
      default:
        return <HomeScreen onNavigate={handleNavigate} onSelectDestination={handleSelectDestination} />;
    }
  };

  const isNavBarVisible = mainScreen !== 'destinationDetail' && mainScreen !== 'chat';

  switch (appScreen) {
    case 'welcome':
      return <WelcomeScreen onGetStarted={handleGetStarted} />;
    case 'onboarding':
      return <OnboardingScreen onComplete={handleOnboardingComplete} />;
    case 'login':
      return <LoginScreen onLogin={handleLogin} onBack={handleBackToOnboarding} />;
    case 'main':
      return (
        <div className="relative min-h-screen w-full font-sans bg-base-200/50">
          <main className={isNavBarVisible ? 'pb-24' : ''}>{renderMainContent()}</main>
          {isNavBarVisible && (
             <BottomNavBar 
                activeTab={mainScreen as Tab} 
                onTabChange={(tab) => handleNavigate(tab)}
                onChatClick={handleOpenChat}
              />
          )}
        </div>
      );
    default:
      return <WelcomeScreen onGetStarted={handleGetStarted} />;
  }
};

export default App;