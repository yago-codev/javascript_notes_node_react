module.exports = {
  isOwner: (user, note) => {
    if (JSON.stringify(user._id) === JSON.stringify(note.author._id)) {
      return true;
    } else {
      return false;
    }
  }
}