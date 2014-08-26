load('scripts/linkedlist_ADT.js');

var cities = new LList();
print('Inserting Conway after the head... ');
cities.insert("Conway", "head");
print('Inserting Russellville after Conway... ');
cities.insert("Russellville", "Conway");
print('Inserting Carlisle after Russellville... ');
cities.insert("Carlisle", "Russellville");
print('Inserting Alma after Carlisle... ');
cities.insert("Alma", "Carlisle");
print('Hitting Display... ');
cities.display();
print();

print('Removing Carlisle and displaying... ');
cities.remove("Carlisle");
cities.display();