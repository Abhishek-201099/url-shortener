import { useForm } from "react-hook-form";
import { getShortURL } from "../services/getShortURL";
import { useState } from "react";
import CopyBtn from "../ui/CopyBtn";

const urlResults = [];

// const urlResults = [
//   {
//     originalURL: "https://www.google.com",
//     shortURL: "https://shortone",
//   },
//   {
//     originalURL: "https://www.google.com",
//     shortURL: "https://shorttwo",
//   },
//   {
//     originalURL: "https://www.google.com",
//     shortURL: "https://shortthree",
//   },
//   {
//     originalURL: "https://www.google.com",
//     shortURL: "https://shortfour",
//   },
// ];

export default function Shortener() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log("Form Data : ", data);

    // FIX THIS LOGIC OF ISLOADING STATE HERE AND IN SERVICES AS WELL.
    // try {
    //   setIsloading(true);
    //   const shortenedUrl = await getShortURL(data.url);
    //   if (!shortenedUrl) return;
    //   urlResults.push({ originalURL: data.url, shortURL: shortenedUrl });
    //   console.log("urlresutls :", urlResults);
    // } catch (error) {
    //   setIsloading(false);
    //   console.log("Error : ", error.message);
    // }
  }

  return (
    <section className="section-shortener">
      <div className="shortener-container">
        <form className="shortener-form" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="url"
              placeholder="Shorten link here..."
              {...register("url", {
                required: "Please enter the url",
              })}
              className={`${errors?.url?.message ? "shortener-error" : ""}`}
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Shortening..." : "Shorten it!"}
            </button>
          </div>
          {errors?.url?.message && <p>{errors?.url?.message}</p>}
        </form>
      </div>

      <div className="shortener-results">
        {urlResults.length
          ? urlResults.map((shortUrl, index) => {
              return (
                <div className="shortener-result" key={index}>
                  <p className="shortener-original-url">
                    {shortUrl.originalURL}
                  </p>
                  <p className="shortener-result-url">{shortUrl.shortURL}</p>
                  <CopyBtn
                    normalStateClass="shortener-copy-btn shortener-copy-normal"
                    CopiedStateClass="shortener-copy-btn shortener-copied"
                    valueToCopy={shortUrl.shortURL}
                  />
                </div>
              );
            })
          : null}
      </div>
    </section>
  );
}
