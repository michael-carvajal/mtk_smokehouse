import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Hash the password
  const hashedPassword = await bcrypt.hash("password", 10);

  await prisma.product.deleteMany(); // Deletes all users
  await prisma.blogPost.deleteMany(); // Deletes all users
  await prisma.homePage.deleteMany(); // Deletes all users
  await prisma.user.deleteMany(); // Deletes all users
  

  // Create two admin users
  const user1 = await prisma.user.create({
    data: {
      name: "Admin One",
      email: "admin1@example.com",
      password: hashedPassword,
      role: "admin",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Admin Two",
      email: "admin2@example.com",
      password: hashedPassword,
      role: "admin",
    },
  });

  // Create blog posts for each user
  const blogPost1 = await prisma.blogPost.create({
    data: {
      title: "First Blog Post",
      content: "Content of the first blog post",
      author: { connect: { id: user1.id } },
    },
  });

  const blogPost2 = await prisma.blogPost.create({
    data: {
      title: "Second Blog Post",
      content: "Content of the second blog post",
      author: { connect: { id: user2.id } },
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
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: "Smoked Trout",
      description: "Delicious smoked trout",
      price: 24.99,
      countryCode: 1,
      createdBy: { connect: { id: user1.id } },
    },
  });

  const product3 = await prisma.product.create({
    data: {
      name: "Smoked Mackerel",
      description: "Delicious smoked mackerel",
      price: 19.99,
      countryCode: 1,
      createdBy: { connect: { id: user2.id } },
    },
  });

  const product4 = await prisma.product.create({
    data: {
      name: "Smoked Eel",
      description: "Delicious smoked eel",
      price: 34.99,
      countryCode: 1,
      createdBy: { connect: { id: user2.id } },
    },
  });
  const HomePage = await prisma.homePage.create({
    data: {
      featureOneTitle: "SMOKEHOUSE GOLD LABEL",
      featureOneBody: "Our Gold Label is what made MT. Kisco Smokehouse what it is today. With its rich, buttery texture and sweet lacing of fruit-wood smoke, it accounts for most of our smoked salmon sales. Smoked with the perfect blend of apple and cherry woods, our salmon is praised for its delicate smoked flavor and silky texture. Our salmon comes from the best aquaculture farms located in the the icy Northern Atlantic off the coast of Scotland. We receive daily deliveries of fresh Atlantic salmon flown in directly from the farms fresh, never frozen, giving it an amazingly silky texture, and rich, deep orange color.",
      featureOneLink: "SHOP FOR GOLD LABEL SMOKED SALMON",
      featureOneImageLink: "/link to image",
      featureTwoTitle: "SMOKEHOUSE SMOKED SALMON LOIN",
      featureTwoBody: "As one of the most coveted cuts of smoked salmon, this center cut is the filet mignon of salmon. The salmon loin is what the Russian Czars were served during times of great celebration earning it the name ‘czar cut salmon’. The loin is one of the meatier cuts of salmon: uniform in thickness, flavorful, and with a succulent texture. For an elegant, understated presentation, place the salmon loin on a flat platter, slice it into half-inch medallions and serve with a squeeze of lemon and garnish.",
      featureTwoLink: "SHOP FOR SMOKED SALMON LOIN",
      featureTwoImageLink: "/link to image",
    },
  });

  console.log({
    user1,
    user2,
    blogPost1,
    blogPost2,
    product1,
    product2,
    product3,
    product4,
    HomePage
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
