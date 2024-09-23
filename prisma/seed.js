import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Hash the password
  const hashedPassword = await bcrypt.hash("mtkSmokehouse1995", 10);

  await prisma.product.deleteMany();
  await prisma.blogPost.deleteMany();
  await prisma.homePage.deleteMany();
  await prisma.contactPage.deleteMany();
  await prisma.user.deleteMany();

  // Create two admin users
  const user1 = await prisma.user.create({
    data: {
      name: "Admin One",
      email: "admin1@email.com",
      password: hashedPassword,
      role: "admin",
    },
  });



  // Create products for each user
  const product1 = await prisma.product.create({
    data: {
      name: "Smoked Salmon",
      description: "Delicious smoked salmon",
      price: 29.99,
      countryCode: 1,
      createdBy: { connect: { id: user1.id } },
      imageLink : "https://utfs.io/f/70d86930-457e-4a6a-8957-421c21f683a0-xnxmog.jpg"
    },
  });
  
  const product2 = await prisma.product.create({
    data: {
      name: "Smoked Trout",
      description: "Delicious smoked trout",
      price: 24.99,
      countryCode: 1,
      createdBy: { connect: { id: user1.id } },
      imageLink : "https://utfs.io/f/68b52bdf-2615-4f1c-9b44-5ea3fcedc9f3-1tvaj4.jpg"
    },
  });

  const product3 = await prisma.product.create({
    data: {
      name: "Caviar",
      description: "Farm Raised Osetra Caviar from Belgium",
      price: 19.99,
      countryCode: 1,
      createdBy: { connect: { id: user1.id } },
      imageLink : "https://utfs.io/f/0c7b6e86-8cdd-4802-a7e4-60cc70bb86e1-mm5uny.jpg"
    },
  });
  
  const product4 = await prisma.product.create({
    data: {
      name: "Bagels",
      description: "Daily baked fresh New York Bagels",
      price: 3.99,
      countryCode: 1,
      createdBy: { connect: { id: user1.id } },
      imageLink : "https://utfs.io/f/3398f17a-4e4a-427e-99da-2ec5b686ab80-n3h4kc.jpg"
    },
  });
  const HomePage = await prisma.homePage.create({
    data: {
      featureOneTitle: "SMOKEHOUSE GOLD LABEL",
      featureOneBody:
        "Our Gold Label is what made MT. Kisco Smokehouse what it is today. With its rich, buttery texture and sweet lacing of fruit-wood smoke, it accounts for most of our smoked salmon sales. Smoked with the perfect blend of apple and cherry woods, our salmon is praised for its delicate smoked flavor and silky texture. Our salmon comes from the best aquaculture farms located in the the icy Northern Atlantic off the coast of Scotland. We receive daily deliveries of fresh Atlantic salmon flown in directly from the farms fresh, never frozen, giving it an amazingly silky texture, and rich, deep orange color.",
      featureOneLink: "SHOP FOR GOLD LABEL SMOKED SALMON",
      featureOneImageLink: "https://utfs.io/f/7c04feea-bea1-4b2c-8243-77bf1069c66b-v0dpsw.jpg",
      featureTwoTitle: "SMOKEHOUSE SMOKED WHOLE TROUT",
      featureTwoBody:
        "As one of the finest cuts of smoked trout, this delicately smoked filet is the crown jewel of freshwater fish. Prized for its mild flavor and velvety texture, smoked trout has been enjoyed by connoisseurs for centuries. The filet offers a rich, buttery mouthfeel, balanced by the subtle smokiness that enhances its natural flavors. For an exquisite presentation, lay the trout filet on a serving board, slice into thin, elegant strips, and pair with a touch of crème fraîche and dill. Perfect for refined gatherings or as a centerpiece for any special occasion.",
      featureTwoLink: "SHOP FOR SMOKED WHOLE TROUT",
      featureTwoImageLink: "https://utfs.io/f/68b52bdf-2615-4f1c-9b44-5ea3fcedc9f3-1tvaj4.jpg",
    },
  });
  const ContactPage = await prisma.contactPage.create({
    data: {
      address: "520 Lexington Ave, Mt Kisco, NY 10549",
      phone: "(914)-244-0702",
      Monday: "9:00 AM - 4:00 PM",
      Tuesday: "9:00 AM - 4:00 PM",
      Wednesday: "9:00 AM - 4:00 PM",
      Thursday: "9:00 AM - 4:00 PM",
      Friday: "9:00 AM - 4:00 PM",
      Saturday: "9:00 AM - 4:00 PM",
      Sunday: "9:00 AM - 12:00 PM",
    },
  });
  const RootsPage = await prisma.ourRoot.create({
    data: {
      title : "Our Roots",
      content : "For over 10 years, Mt. Kisco Smokehouse has proudly served the greater Westchester area, delivering the finest smoked seafood with a focus on quality and tradition. While our fish may come from trusted sources beyond our shores, every step of our smoking process is done locally, right here in Westchester. Specializing in smoked salmon and trout, we use time-honored techniques to craft products that reflect our commitment to excellence. Serving the community with passion and care, Mt. Kisco Smokehouse invites you to experience the unique flavors that have made us a trusted name in the Westchester area for over a decade.",
      imageUrl : "https://utfs.io/f/34ac9c45-b876-4101-9d77-197cded3531b-43nwx0.jpg",
    },
  });

  console.log({
    user1,
    product1,
    product2,
    product3,
    product4,
    HomePage,
    ContactPage,
    RootsPage
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
