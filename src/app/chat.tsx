// import { multiply } from "modules/onnx-llm/src";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, NativeModules } from "react-native";
import { hello as hi } from "../../modules/onnx-llm-expo";


export default function Hello() {
  const [prompts, setPrompts] = useState(["Hello local LLM 👋"]);
  const [prompt, setPrompt] = useState("");
  const [firstMsg, setFirstMsg] = useState("Welcome!");
  // useEffect(() => {
  //   const OnnxLlmModule = NativeModules.OnnxLlm;
  //   OnnxLlmModule.multiply(1, 5)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

    useEffect(() => {
      console.log(hi())
    }, []);

  const handleSend = () => {
    if (prompt.trim() !== "") {
      setPrompts([...prompts, prompt]);
      setPrompt("");
    }
  };

  return (
    <View className='flex-1 items-center justify-center bg-gray-100'>
      <View>
        <Text>{firstMsg}</Text>
      </View>
      <View className='absolute bottom-0 left-0 right-0 '>
        <View className='w-64'>
          {prompts.map((prompt, index) => (
            <Text key={index} className='p-2 bg-slate-200 colo'>
              {prompt}
            </Text>
          ))}
        </View>
        <View className='flex-row items-center bg-white p-4'>
          <TextInput
            className='flex-1 rounded-full border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none'
            placeholder='Type your message...'
            value={prompt}
            onChangeText={setPrompt}
          />
          <TouchableOpacity className='ml-4 rounded-full bg-blue-500 p-2' onPress={handleSend}>
            <Text className='text-white font-bold'>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
function useEffect(arg0: () => void, arg1: undefined[]) {
  throw new Error("Function not implemented.");
}
