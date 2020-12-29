#include <napi.h>
#include "code/helloworldexample.h"


Napi::Object Initialize(Napi::Env env, Napi::Object exports) {
  return helloworldexample::Init(env, exports);
  
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Initialize)
