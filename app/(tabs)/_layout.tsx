import TabIcon from "@/components/TabIcon";
import { icons } from "@/constants";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#3cc",
          tabBarInactiveTintColor: "#cdcde0",
          tabBarStyle: {
            backgroundColor: "#1e293b",
            borderTopWidth: 2,
            borderTopColor: "#3cc",
            height: 58,
          },
        }}
      >
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  name="Profile"
                  icon={icons.profile}
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  name="Home"
                  icon={icons.home}
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  name="Bookmark"
                  icon={icons.bookmark}
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
      </Tabs>
    </>
  );
}
