import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Platform, Pressable, StyleSheet } from "react-native";
import { useColorScheme } from "nativewind";
import { BlurView } from "expo-blur";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Colors from "@/constants/Colors";
import { moderateScale } from "@/lib/metrics";
import { TabIconProfile } from "@/components/tab-icon-profile";
import { useUiStore } from "@/store/ui";
import { Icons } from "@/assets/icons";
import { getBorderColor } from "@/lib/util";

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const insets = useSafeAreaInsets();
  const onOpenButtomSheet = useUiStore((state) => state.onOpenButtomSheet);

  return (
    <Tabs
      // initialRouteName="menu"

      screenOptions={{
        //Header

        headerShown: false,
        lazy: false,
        headerTitleStyle: {
          fontFamily: "regular",
        },

        //TabBar
        tabBarIconStyle: {
          marginBottom: -moderateScale(10),
        },
        tabBarLabelStyle: {
          paddingBottom: moderateScale(10),
          fontFamily: "medium",
          fontSize: moderateScale(13),
        },
        tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
        tabBarInactiveTintColor: Colors[colorScheme].tabIconSelected,
        tabBarBackground:
          Platform.OS === "ios"
            ? () => (
                <BlurView
                  className="bg-backgroundLight/95 dark:bg-backgroundDark/95"
                  // intensity={95}
                  tint={colorScheme}
                  style={{
                    ...StyleSheet.absoluteFillObject,
                    overflow: "hidden",
                  }}
                />
              )
            : undefined,
        tabBarStyle: {
          // zIndex: 999,
          height: moderateScale(75) + insets.bottom,
          position: Platform.OS === "ios" ? "absolute" : undefined,
          borderTopWidth: 0.5,
          borderTopColor: getBorderColor(colorScheme, Platform.OS),
          backgroundColor: Platform.OS === "ios" ? "transparent" : Colors[colorScheme].background,
        },
        // tabBarLabelPosition: "below-icon",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Inicio",
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <Icons name={focused ? "home-fill" : "home-outline"} color={color} size={size} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={22}
                    // color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <Icons name={focused ? "menu-food-fill" : "menu-food-outline"} color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="users"
        options={{
          title: "Usuarios",

          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <Icons name={focused ? "user-fill" : "user-outline"} color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            onOpenButtomSheet();
            return;
            // router.push("(modals)/modal"); // <-- Here you put the name where the chat component is declared
          },
        })}
        options={{
          title: "Tú",
          headerShown: false,

          tabBarIcon: ({ color, focused, size }) => (
            <TabIconProfile
              //
              color={color}
              size={size + 4}
              focused={focused}
              hasAvatar={true}
              userName="Jeral Pineda"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        redirect={true} //Ocultar el tab por rol
      />
    </Tabs>
  );
}
