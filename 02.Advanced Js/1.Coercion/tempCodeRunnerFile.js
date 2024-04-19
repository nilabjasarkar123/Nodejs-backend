var teacher='sanket';
function fun()
{
    var teacher='pulkit';
    console.log(teachingassistant,teacher);//error as teachingassistant is autoglobal and it is undeclared, will assign value in execution phase
    teachingassistant='vaibhav'; //autogloble
}
