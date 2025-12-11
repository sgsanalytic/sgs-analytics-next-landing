import { AboutUs, AboutUsCTA } from "@/features/aboutUs";
import {
  getAboutUsCertification,
  getAboutUsExperience,
} from "@/features/aboutUs/services/aboutUs.services";
import {
  mapCertificationsToComponent,
  mapExperiencesToComponent,
} from "@/features/aboutUs/utils/mappers/aboutUs.mappers";

// Revalidar los datos cada 3 minutos (180 segundos)
export const revalidate = 180;

export default async function AboutUsExperiencePage() {
  // Obtener datos en el servidor
  const [certificationsData, experiencesData] = await Promise.all([
    getAboutUsCertification(),
    getAboutUsExperience(),
  ]);

  // Mapear los datos al formato del componente
  const certifications = mapCertificationsToComponent(certificationsData);
  const experiences = mapExperiencesToComponent(experiencesData);

  return (
    <div>
      <main className="pt-16 ">
        {/* About Us Section */}
        <AboutUs
          certifications={certifications}
          experiences={experiences}
        />

        {/* CTA Section */}
        <AboutUsCTA />
      </main>
    </div>
  );
}
