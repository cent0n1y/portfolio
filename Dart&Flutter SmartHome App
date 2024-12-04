### Dart & Flutter

import 'package:flutter/material.dart';

void main() {
  runApp(SmartHomeApp());
}

class SmartHomeApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: SmartHomePage(),
    );
  }
}

class SmartHomePage extends StatefulWidget {
  @override
  _SmartHomePageState createState() => _SmartHomePageState();
}

class _SmartHomePageState extends State<SmartHomePage> {
  bool lightIsOn = false;
  bool thermostatIsRunning = false;
  bool doorsAreLocked = true;
  bool camerasAreOn = false;

  // Счетчик температуры
  double temperature = 22.0; // Начальная температура

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Умный дом'),
        backgroundColor: Colors.grey,
      ),
      backgroundColor: Colors.grey[200], // Добавлено свойство для фона
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: GridView.count(
          crossAxisCount: 2,
          crossAxisSpacing: 16.0,
          mainAxisSpacing: 16.0,
          children: [
            _buildSmartWidget(
              icon: lightIsOn ? Icons.lightbulb : Icons.lightbulb_outline,
              label: lightIsOn ? 'Свет включен' : 'Свет выключен',
              color: Colors.yellow,
              onTap: () {
                setState(() {
                  lightIsOn = !lightIsOn;
                });
              },
            ),
            _buildTemperatureWidget(),
            _buildSmartWidget(
              icon: doorsAreLocked ? Icons.lock : Icons.lock_open,
              label: doorsAreLocked ? 'Двери закрыты' : 'Двери открыты',
              color: Colors.green,
              onTap: () {
                setState(() {
                  doorsAreLocked = !doorsAreLocked;
                });
              },
            ),
            _buildSmartWidget(
              icon: Icons.camera_alt,
              label: camerasAreOn ? 'Камеры включены' : 'Камеры выключены',
              color: Colors.purple,
              onTap: () {
                setState(() {
                  camerasAreOn = !camerasAreOn;
                });
              },
            ),
          ],
        ),
      ),
    );
  }

  // Виджет для температуры с кнопками "+" и "-"
  Widget _buildTemperatureWidget() {
    return GestureDetector(
      onTap: () {},
      child: Container(
        decoration: BoxDecoration(
          color: Colors.redAccent.withOpacity(0.2),
          borderRadius: BorderRadius.circular(16),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.thermostat,
              size: 48,
              color: Colors.redAccent,
            ),
            SizedBox(height: 8),
            Text(
              'Температура дома: ${temperature.toStringAsFixed(1)}°C',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                IconButton(
                  icon: Icon(Icons.remove),
                  onPressed: () {
                    setState(() {
                      temperature -= 1.0; // Уменьшаем температуру на 1
                    });
                  },
                ),
                IconButton(
                  icon: Icon(Icons.add),
                  onPressed: () {
                    setState(() {
                      temperature += 1.0; // Увеличиваем температуру на 1
                    });
                  },
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSmartWidget({
    required IconData icon,
    required String label,
    required Color color,
    required VoidCallback onTap,
  }) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          color: color.withOpacity(0.2),
          borderRadius: BorderRadius.circular(16),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              icon,
              size: 48,
              color: color,
            ),
            SizedBox(height: 8),
            Text(
              label,
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
