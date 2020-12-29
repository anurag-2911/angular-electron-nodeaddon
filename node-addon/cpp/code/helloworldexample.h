#include <napi.h>

namespace helloworldexample {

    std::string hello();
    Napi::String HelloWrapped(const Napi::CallbackInfo& info);
    
    Napi::Object Init(Napi::Env env, Napi::Object exports);
    
}
