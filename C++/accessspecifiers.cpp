#include <iostream>
using namespace std;
//access specifier - public,private,protected
class user{
  static int a,b;
  public:
    void getData(){ //inline function
        cout<<"a is "<<a<<endl;
        cout<<"b is "<<b<<endl;
    } 
    void putData();
};
int user::a=25;
int user::b=15;
void user :: putData(){ //outside member function called scope rsolution sign ::
    cout<<"Putdata function called.."<<endl;
}
int main() {
   cout << "Public,Private,Protected Demo"<<endl;
   user obj;
   obj.putData();
//   obj.a = 10;
//   obj.b = 15;
  obj.getData();

    return 0;
}