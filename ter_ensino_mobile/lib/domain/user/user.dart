class User {
  int id;
  String name;
  String email;
  Null title;
  Null about;
  Null imageURL;

  User({this.id, this.name, this.email, this.title, this.about, this.imageURL});

  User.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    name = json['name'];
    email = json['email'];
    title = json['title'];
    about = json['about'];
    imageURL = json['imageURL'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['name'] = this.name;
    data['email'] = this.email;
    data['title'] = this.title;
    data['about'] = this.about;
    data['imageURL'] = this.imageURL;
    return data;
  }
}
