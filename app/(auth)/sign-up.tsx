import ActionButton from "@/components/ActionButton";
import FormField from "@/components/FormField";
import SkipTo from "@/components/SkipTo";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const SignIn = () => {
  const [formData, setformData] = useState<{
    fullname: string;
    email: string;
    password: string;
  }>({
    fullname: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {};

  return (
    <SafeAreaView className="bg-slate-100 h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <SkipTo path="/home" />

        <View className="w-full my-20 px-4">
          <Text className="text-2xl text-sky-700 font-bold max-w-[300px]">
            Register new account
          </Text>
        </View>

        <View className="w-full px-4">
          <FormField
            label="Name"
            value={formData.fullname}
            placeholder=""
            onChangeHandler={(text) =>
              setformData({ ...formData, fullname: text })
            }
          />

          <FormField
            label="Email"
            value={formData.email}
            placeholder=""
            fieldStyles="mt-5"
            keyboardType="email-address"
            onChangeHandler={(text) =>
              setformData({ ...formData, email: text })
            }
          />

          <FormField
            label="Password"
            value={formData.password}
            placeholder=""
            fieldStyles="mt-5"
            onChangeHandler={(text) =>
              setformData({ ...formData, password: text })
            }
          />

          <ActionButton
            title="Sign Up"
            containerStyles="w-full mt-7"
            isLoading={isSubmitting}
            onPressHandler={handleSubmit}
          />

          <View className="flex-row items-center gap-2 p-1">
            <Text className="text-slate-800 text-lg">
              Already have an account?
            </Text>

            <Link
              href="/sign-in"
              className="underline font-bold text-sky-800 text-lg"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#0369a1" style="light" translucent={true} />
    </SafeAreaView>
  );
};

export default SignIn;
