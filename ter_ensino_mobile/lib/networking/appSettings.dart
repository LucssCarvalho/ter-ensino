class AppSettings {
  static AppSettings _instance;

  factory AppSettings() {
    _instance ??= AppSettings._internalConstructor();

    return _instance;
  }

  AppSettings._internalConstructor() {
    isProduction = bool.fromEnvironment('dart.vm.product');

    url = isProduction
        ? 'https://backend-ter-ensino.herokuapp.com'
        : 'https://backend-ter-ensino.herokuapp.com';
  }

  String url;
  bool isProduction;
}
