function getInitials(name)
{
  var parts = name.split(' ');
  var initials = '';
  for (var i = 0; i < parts.length; i++) 
  {
    if (parts[i].length > 0 && parts[i] !== ' ') 
    {
      initials += parts[i][0];
    }
  }
  console.log(initials);
}
getInitials("Mahendra Singh Dhoni");
getInitials("Shah Rukh Khan");