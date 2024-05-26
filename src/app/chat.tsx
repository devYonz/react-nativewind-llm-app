import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Hello() {
  const [prompts, setPrompts] = useState(["Hello local LLM 👋"]);
  const [prompt, setPrompt] = useState("second");
  const queuePrompt = () => setPrompts([...prompts, prompt]);

  return (
    <View className='flex-1 items-center justify-center bg-gray-100'>
      <View>
        <Text>Hello</Text>
      </View>
      <View className='absolute bottom-0 left-0 right-0 '>
        <View className='w-64'>
          {prompts.map((prompt) => (
            <Text id={prompt} className='p-2 bg-slate-200 colo'>{prompt}</Text>
          ))}
        </View>
        <View className='flex-row items-center bg-white p-4'>
          <TextInput
            className='flex-1 rounded-full border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none'
            placeholder='Type your message...'
            value={prompt}
          />
          <TouchableOpacity className='ml-4 rounded-full bg-blue-500 p-2' onPress={queuePrompt}>
            <Text className='text-white font-bold'>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
