import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard, { Property } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";

// Import images
import heroBg from "@/assets/hero-bg.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

// Sample featured properties
const featuredProperties: Property[] = [
  {
    id: "1",
    title: "Modern Downtown Apartment",
    location: "Downtown District, City Center",
    price: 750000,
    image_url: property1,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
  },
  {
    id: "2",
    title: "Luxury Family House",
    location: "Suburbia Heights, West Side",
    price: 1250000,
    image_url: property2,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
  },
  {
    id: "3",
    title: "Penthouse with City View",
    location: "Skyline Tower, Business District",
    price: 2100000,
    image_url: property3,
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 hero-gradient opacity-80"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Find Your <span className="text-gradient">Dream Home</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover premium properties with our expert real estate team. Your
            perfect home is just one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/listings">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg"
              >
                View Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/20 text-foreground hover:bg-white/10 px-8 py-6 text-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Why Choose EliteProperties
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With years of expertise and a commitment to excellence, we make
              your real estate journey seamless and successful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 glass rounded-xl">
              <Star className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Premium Service
              </h3>
              <p className="text-muted-foreground">
                Personalized attention and expert guidance throughout your
                property journey.
              </p>
            </div>

            <div className="text-center p-8 glass rounded-xl">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Trusted Partners
              </h3>
              <p className="text-muted-foreground">
                Building lasting relationships with clients through transparency
                and integrity.
              </p>
            </div>

            <div className="text-center p-8 glass rounded-xl">
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Market Expertise
              </h3>
              <p className="text-muted-foreground">
                Deep local knowledge and market insights to help you make
                informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover our handpicked selection of premium properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/listings">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white"
              >
                View All Properties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Find Your{" "}
            <span className="text-gradient">Perfect Home?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experienced team help you navigate the real estate market
            and find the property of your dreams.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
