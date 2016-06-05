#include <iostream>
#include <string>
#include <random>

std::string getRandomString();

int main(int argc, char *argv[])
{
  std::cout << getRandomString() << std::endl;
  return 0;
}

std::string getRandomString(){
  char c;
  for (int i = 28; i < 140; i++){
    c = i;
    std::cout << c << " ";
  }
  std::cout << std::endl;
  return "Hello";
}
