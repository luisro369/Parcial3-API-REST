
const UserSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	username: {type: String, required: true, default: "John Doe"},
	password: {type: String, select: false},
	email: {type: String, unique: true, lowercase: true},
	phone: {type: String, required: true},
})