import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DAY_SCREEN, DAY_SCREEN_ID, THREE_DAYS_SCREEN, THREE_DAYS_SCREEN_ID, WEEK_SCREEN, WEEK_SCREEN_ID, MONTH_SCREEN, MONTH_SCREEN_ID } from '../constants/sreens';
import DayScreen from './day/DayScreen';
import MonthScreen from './month/MonthScreen';
import ThreeDaysScreen from './threedays/ThreeDaysScreen';
import WeekScreen from './week/WeekScreen';


export const navigationDefaultOptions = () => {
  Navigation.setDefaultOptions({
    // topBar: {
    //   visible: false,
    //   drawBehind: true,
    //   animate: false,
    //   background: {
    //     color: DARK
    //   },
    //   title: {
    //     color: WHITE
    //   },
    //   backButton: {
    //     color: WHITE
    //   }
    // },
    // bottomTabs: {
    //   currentTabIndex: 3,
    //   backgroundColor: DARK,
    //   animate: false
    // },
    // bottomTab: {
    //   iconColor: WHITE,
    //   selectedIconColor: YELLOW,
    //   selectedTextColor: YELLOW
    // },
    // animations: {
    //   push: {
    //     enabled: false
    //   },
    //   pop: {
    //     enabled: false
    //   }
    // }
  });
}

export const registerScreens = () => {
  Navigation.registerComponent(DAY_SCREEN, () => DayScreen);
  Navigation.registerComponent(THREE_DAYS_SCREEN, () => ThreeDaysScreen);
  Navigation.registerComponent(WEEK_SCREEN, () => WeekScreen);
  Navigation.registerComponent(MONTH_SCREEN, () => MonthScreen);
}

export const mainRoot = async () => {
  const icons = await Promise.all([
    Icon.getImageSource("calendar-today", 30),
    Icon.getImageSource("calendar-range", 30),
    Icon.getImageSource("calendar-week", 30),
    Icon.getImageSource("calendar-month", 30)
  ]);

  return {
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: DAY_SCREEN,
                    id: DAY_SCREEN_ID
                  }
                },
              ],
              options: {
                bottomTab: {
                  text: 'день',
                  icon: icons[0]
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: THREE_DAYS_SCREEN,
                    id: THREE_DAYS_SCREEN_ID
                  }
                }
              ],
              options: {
                bottomTab: {
                  text: '3 дня',
                  icon: icons[1]
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: WEEK_SCREEN,
                    id: WEEK_SCREEN_ID
                  }
                }
              ],
              options: {
                bottomTab: {
                  text: 'неделя',
                  icon: icons[2]
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: MONTH_SCREEN,
                    id: MONTH_SCREEN_ID
                  }
                }
              ],
              options: {
                bottomTab: {
                  text: 'месяц',
                  icon: icons[3]
                }
              }
            }
          }
        ]
      }
    }
  }
}