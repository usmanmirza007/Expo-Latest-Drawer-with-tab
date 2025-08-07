import { Entypo, FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React, { useLayoutEffect, useState } from 'react';
import { Switch, Text, View } from 'react-native';

const Settings = () => {
    const navigation = useNavigation();
  
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
useLayoutEffect(() => {
    navigation.getParent()?.setOptions({ headerTitle: "Settings" });
  }, [navigation]);
  return (
    <View style={{
      marginHorizontal: "2%"
    }}>
      {/* <View style={{
        alignItems: "center",

      }}>
        <Text style={{
          fontSize: 25
        }}>Settings</Text>
      </View> */}

      {/* {basic} */}

      <Text style={{
        marginBottom: 10,
        color: 'light grey',
        fontSize: 12
      }}>BASICS</Text>


      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',



        }}>
        <Ionicons
          name="notifications-outline"
          size={24}
          color="black"
          style={{
            marginRight: "3%"
          }} />
        <View>
          <Text style={{
            fontSize: 15,
            fontWeight: '600',
            color: 'black'
          }}>Notifications</Text>
          <Text style={{
            fontSize: 13,
            color: 'black'
          }}>Change your alerts</Text>
        </View>



      </View>

      <View style={{
        flexDirection: 'row',
        marginTop: "2%",
        alignItems: 'center',
      }} >
        <Entypo
          name="folder-video"
          size={24}
          color="black"
          style={{
            marginRight: 12
          }} />
        <View>
          <Text style={{
            fontSize: 15,
            fontWeight: '600',
            color: 'black'
          }}>Video</Text>
          <Text style={{
            fontSize: 13,
            color: 'black'
          }}>Change your Video Settings</Text>
        </View>
      </View>

      {/* {Privacy} */}

      <Text style={{
        marginTop: "5%",
        color: 'light grey',
        fontSize: 12
      }}>Privacy</Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
        <MaterialIcons
          name="visibility"
          size={24}
          color="black"
          style={{
            marginRight: 12
          }} />
        <View>
          <Text style={{
            fontSize: 15,
            fontWeight: '600',
            color: 'black'
          }}>Profile Visibility</Text>
          <Text style={{
            fontSize: 13,
            color: 'black'
          }}>Show Profile in global search result</Text>
        </View>
        <View style={{
          flex: 1,

          alignItems: "flex-end"
        }}>
          <Switch
            trackColor={{ false: '#8f8f8f', true: '#25D366' }}

            thumbColor={isEnabled ? 'white' : '#fff'}

            ios_backgroundColor='#25D366'
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: "2%"
        }}>
        <Entypo
          name="block"
          size={24}
          color="black"
          style={{
            marginRight: 12
          }} />
        <View>
          <Text style={{
            fontSize: 15,
            fontWeight: '600',
            color: 'black'
          }}>Block List</Text>
          <Text style={{
            fontSize: 13,
            color: 'black'
          }}>People you've Blocked</Text>
        </View>
      </View>

      <Text style={{
        marginBottom: 10,
        color: 'light grey',
        fontSize: 12
      }}>Legal & FeedBack</Text>


      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
        <MaterialIcons
          name="policy"
          size={24}
          color="black"
          style={{
            marginRight: 12
          }} />
        <View>
          <Text style={{
            fontSize: 15,
            fontWeight: '600',
            color: 'black'
          }}>Legal</Text>
          <Text style={{
            fontSize: 13,
            color: 'black'
          }}>Terms of Service and Privacy Policy</Text>
        </View>
      </View>

      <View style={{
        flexDirection: 'row',
        marginTop: "2%",
        alignItems: 'center',
      }} >
        <FontAwesome6
          name="people-group"
          size={24}
          color="black"
          style={{
            marginRight: 12
          }} />
        <View>
          <Text style={{
            fontSize: 15,
            fontWeight: '600',
            color: 'black'
          }}>True Guidlines</Text>
          <Text style={{
            fontSize: 13,
            color: 'black'
          }}>Content and Community Rules</Text>
        </View>

      </View>

      <View style={{
        flexDirection: 'row',
        marginTop: "2%",
        alignItems: 'center',
      }} >
        <MaterialIcons
          name="feedback"
          size={24}
          color="black"
          style={{
            marginRight: 12
          }} />
        <View>
          <Text style={{
            fontSize: 15,
            fontWeight: '600',
            color: 'black'
          }}>FeedBack</Text>
          <Text style={{
            fontSize: 13,
            color: 'black'
          }}>Need help or have a Question? Tell us</Text>
        </View>

      </View>
      <View>

      </View>
    </View>
  );
};

export default Settings;