import Image from "next/image";
import artistProfile from "@/assets/images/artist/kate-self-portrait.png";
export default function Artist() {
  return (
    <div className="flex flex-col items-start gap-x-16 md:flex-row md:gap-8">
      <div className="bg-cerulean flex-none p-4">
        <Image
          src={artistProfile}
          width="351"
          height="381"
          alt="A photo of the artist - a redhead with rainbow glasses against a blue and gold background"
        />
      </div>

      <div>
        <div className="pt-8 md:pt-1">
          <h2 className="pb-2 text-2xl">Kate Nahodyl is a fine artist & sculpting instructor in Atlanta, Georgia.</h2>

          <div className="bg-yellow h-1" />
        </div>

        <div className="py-8 text-center">
          <blockquote className="font-script text-lg">
            &ldquo;Of all the paths you take in life, make sure a few of them are dirt.&rdquo;
          </blockquote>
          <p className="pt-4 text-xs">- John Muir</p>
        </div>

        <div className="space-y-5 py-10 text-xl">
          <p>
            Kate discovered ceramics during an especially tough personal journey and found healing in the tactile,
            malleable, and meditative process that comes from working with clay. Her sculptures represent her experience
            with womanhood. Her signature ‘heart eyes’ ups the cute factor in her pieces, but the overall effect is
            achieved in her ability to create complex, anthropomorphic personalities in her creatures.
          </p>

          <p>
            Kate’s background in geology - BS in Environmental Geology from Georgia State University & from years
            working as a field geologist in the geotechnical engineering industry - helps with understanding the
            chemical processes that her work undergoes through each phase of the ceramic process.
          </p>

          <p>
            Her body of work includes ceramic sculptures, functional ceramic pieces, fine art, digital art, signage,
            murals, and terrible jokes.
          </p>

          <p>
            You can usually find Kate, covered in clay, working from her home studio or at The Art Center, where she
            teaches.
          </p>
        </div>
      </div>
    </div>
  );
}
