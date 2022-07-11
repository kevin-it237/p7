const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


// GET PROFILE

exports.getProfile = async (req, res, next) => {
  try {
    const { id } = req.user;
    const profile = await prisma.profile.findUnique({
      where: {
        userId: Number(id),
      },
    });
    res.status(200).json({
      status: true,
      message: "One profile",
      data: profile,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};

// EDIT PROFILE (BIO + PICTURE)

exports.editProfile = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = {bio: req.body.bio}
    if(req.file) {
      data.image = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
    }
    const profile = await prisma.profile.update({
      where: {
        userId: Number(id),
      },
      data
    });
    res.status(201).json({
      status: true,
      message: "Profile updated !",
      data: profile,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};

