#include <napi.h>
#include "code/helloworldexample.h"
#include "code/testclassexample.h"

Napi::Object Initialize(Napi::Env env, Napi::Object exports) {
  helloworldexample::Init(env, exports);
  return ClassExample::Init(env, exports);
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Initialize)
