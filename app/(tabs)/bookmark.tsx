import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Bookmark = () => {
  return (
    <SafeAreaView className="bg-slate-100 h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-screen justify-center items-center px-4">
          <Text className="text-sky-800">Bookmark</Text>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="white" style="dark" />
    </SafeAreaView>
  );
};

export default Bookmark;
