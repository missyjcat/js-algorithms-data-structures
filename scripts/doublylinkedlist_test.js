load('scripts/doublylinkedlist_ADT.js');    

var cities = new LList();
print('inserting Conway, Russellville, Carlisle, Alma, in that order...');
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
print();
print('removing Carlisle');
cities.remove("Carlisle");
cities.display();
print();
print('displaying all in reverse...');
cities.dispReverse();