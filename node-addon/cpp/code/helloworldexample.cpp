#include "helloworldexample.h"

std::string helloworldexample::hello(){
    return "Hello World!";
}

Napi::String helloworldexample::HelloWrapped(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    Napi::String returnValue = Napi::String::New(env, helloworldexample::hello());
    return returnValue;
}

Napi::Object helloworldexample::Init(Napi::Env env, Napi::Object exports) {
    exports.Set("hello", Napi::Function::New(env, helloworldexample::HelloWrapped));
    return exports;
}
