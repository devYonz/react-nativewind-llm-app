# React Native Local LLM Application Plan
The repository aims to run the Generative AI models in a simple react-native application.

There are various players in the space:
[ ] MLC.ai - https://llm.mlc.ai/docs/deploy/android.html https://llm.mlc.ai/docs/deploy/ios.html
[ ] Executorch - [Android Example with C API](https://github.com/microsoft/onnxruntime-inference-examples/tree/main/mobile/examples/phi-3/android)
[ ] llm.c
[ ] llamma.cpp

## v0.1 Creating a react-native project that can cal C / C++ API using local modules
Setup the scaffolding to call a hello world function in a compiled c program.
Q1: Given a simple main.c library and header files how do you push to app?
Q2: How do you call a a compile binary from local module

## v0.2: Loading lamma-3b model in Android & IOS
First objective: load model into device
Q1: Are there any starter guides?
Q2: What are the steps for invoking the models for use in Android and Iphone?
Q3: Finding a Llama Tokenizer
Q4: Calling the model to Generate.




# Expo Router and Tailwind CSS

Use [Expo Router](https://docs.expo.dev/router/introduction/) with [Nativewind](https://www.nativewind.dev/v4/overview/) styling.

## 🚀 How to use

```sh
npx create-expo-app -e with-router-tailwind
```
