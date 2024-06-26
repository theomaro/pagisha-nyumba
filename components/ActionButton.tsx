import { View, Text, TouchableOpacity } from "react-native";

const ActionButton = ({
  title,
  containerStyles,
  textStyles,
  isLoading,
  onPressHandler,
}: {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
  onPressHandler: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      disabled={isLoading}
      className={`bg-sky-700 justify-center items-center rounded-xl min-h-[56px] ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
    >
      <Text className={`text-sky-100 font-semibold text-2xl ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
