#include "testclass.h"

TestClass::TestClass(double value){
    this->value_ = value;
}

double TestClass::getValue()
{
  return this->value_;
}

double TestClass::add(double toAdd)
{
  this->value_ += toAdd;
  return this->value_;
}