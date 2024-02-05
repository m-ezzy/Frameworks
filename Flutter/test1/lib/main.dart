import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

int counter = 0;

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Home(),
    );
  }
}

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.yellow[200],
        title: Text('Test1'),
      ),
      backgroundColor: Colors.green[200],
      // body: const Center(
        // child: Text(
        //   'Hello World',
        //   style: TextStyle(
        //     fontSize: 40,
        //     fontWeight: FontWeight.bold,
        //   ),
        // ),
        // child: Image(
        //   image:NetworkImage("https://www.shutterstock.com/image-photo/mesmerizing-3d-abstract-multicolor-visualization-600nw-2308145127.jpg"),
        // ),
        // child: Image(
        //   image: AssetImage("assets/images/i1.jpg"),
        // ),
      // ),
      // body: Container(
      //   color: Colors.orange[200],
      //   margin: EdgeInsetsDirectional.all(10),
      //   padding: EdgeInsets.all(5),
      //   child: const Text(
      //     'This is a container widget with padding',
      //     style: TextStyle(
      //       fontSize: 26,
      //       fontWeight: FontWeight.bold,
      //     ),
      //   ),
      // ),
      // body: Padding(
      //   padding: EdgeInsets.fromLTRB(5, 5, 5, 10),
      //   child: const Text("This is a padding widget. It's better to use Container widget"),
      // ),
      // body: Row(
      //   mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      //   crossAxisAlignment: CrossAxisAlignment.stretch,
      //   children: [
      //     const Text("This is a row widget"),
      //     const Text(
      //       "This is a row widget",
      //       style: TextStyle(
      //         fontSize: 22,
      //       ),
      //     ),
      //     IconButton(
      //       color: Colors.red[200],
      //       onPressed: () {
      //         print('IconButton pressed');
      //       },
      //       icon: const Icon(Icons.menu_book),
      //     ),
      //   ],
      // ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text("rtghgdfd"),
              Text("rtghgdfd"),
            ],
          ),
          Container(
            color: Colors.red[200],
            child: const Text("This is a column widget"),
          ),
          Container(
            color: Colors.red[400],
            child: IconButton(
              onPressed: () {
                print('IconButton pressed');
              },
              icon: const Icon(
                Icons.ac_unit,
                color: Colors.white,
              ),
            ),
          ),
          Container(
            color: Colors.red[600],
            child: const Text("This is a column widget"),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.yellow[200],
        child: const Icon(Icons.add),
        onPressed: () {
          print('Increment ${++counter}');
        },
      ),
    );
  }
}
