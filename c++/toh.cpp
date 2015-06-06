#include <iostream>
#include <string>
#include <cstdlib>
#include <chrono>
#include <ctime>

void hanoi(int, std::string, std::string, std::string);
unsigned long long count = 0;
int main(int argc, char** argv)
{
    std::cout << "Times" << std::endl;
    for ( int i = 3; i < 50; i++ ){
        auto begin = std::chrono::high_resolution_clock::now();
        //std::clock_t time = clock();
        hanoi(i, "Source", "Aux", "Dest"); 
        //time = std::clock() - time;
        //int ms = double(time)/ CLOCKS_PER_SEC/1000;
        auto end = std::chrono::high_resolution_clock::now();
        auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(end-begin).count();
        std::cout << "Disk " << i << " Took " << count << " moves in " << ms << std::endl;
        count = 0;
    }
    return 0;
}

void hanoi(int disk, std::string src, std::string aux, std::string dst)
{
    if (disk > 0) {
        hanoi(disk-1, src, dst, aux);
        //std::cout<<"Moving " << disk << " from " << src << " to " << dst << std::endl;
        count++;
        hanoi(disk-1, aux, src, dst);
    }
}

