import { icons } from "@/constants";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

const FormField = ({
  label,
  value,
  placeholder,
  fieldStyles,
  keyboardType,
  onChangeHandler,
}: {
  label: string;
  value: string;
  placeholder?: string;
  keyboardType?:
    | "default"
    | "email-address"
    | "number-pad"
    | "phone-pad"
    | "web-search"
    | "visible-password";
  fieldStyles?: string;
  onChangeHandler: (text: string) => void;
}) => {
  const [showPassword, setshowPassword] = useState<boolean>(false);

  return (
    <View className={`w-full space-y-2 ${fieldStyles}`}>
      <Text className="text-xl font-bold">{label}</Text>

      <View className="w-full h-14 px-3 flex-row justify-between items-center border-2 border-slate-500 focus:border-sky-500 rounded-lg">
        <TextInput
          onChangeText={onChangeHandler}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          keyboardType={keyboardType}
          className="text-lg font-semibold flex-1"
          secureTextEntry={label === "Password" && !showPassword}
        />

        {label === "Password" && (
          <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
