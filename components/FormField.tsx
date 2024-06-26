import { View, Text, TextInput } from "react-native";

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
  return (
    <View className={`w-full space-y-2 ${fieldStyles}`}>
      <Text className="text-xl font-bold">{label}</Text>
      <TextInput
        onChangeText={onChangeHandler}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        className="bg-black-500 border-2 border-slate-500 rounded-lg px-3 h-14 text-xl"
      />
    </View>
  );
};

export default FormField;
