import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Link, router } from "expo-router";
import ActionButton from "@/components/ActionButton";

export default function Index() {
  return (
    <SafeAreaView className="bg-sky-200 h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-screen justify-center items-start px-4">
          <Text className="text-6xl text-sky-700 font-bold basis-1/2 max-w-[300px]">
            Rent a House for you.
          </Text>

          <ActionButton
            title="Book Now"
            containerStyles="w-full"
            onPressHandler={() => router.push("/sign-in")}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#0369a1" style="light" translucent={true} />
    </SafeAreaView>
  );
}
