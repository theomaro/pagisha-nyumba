import { Link } from "expo-router";
import { View } from "react-native";

const SkipTo = ({ path }: { path: string }) => {
  return (
    <View className="relative">
      <Link
        href={path}
        className="text-lg text-slate-800 font-semibold absolute right-5 top-4"
      >
        Skip
      </Link>
    </View>
  );
};

export default SkipTo;
