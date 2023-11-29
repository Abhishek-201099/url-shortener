import { useForm } from "react-hook-form";
import { getShortURL } from "../services/getShortURL";
import { useState } from "react";
import CopyBtn from "../ui/CopyBtn";
import { useLocalStorageState } from "../hooks/useLocalStorage";
import { truncateText } from "../helpers/helpers";

export default function Shortener() {
  const [shortenURLS, setShortenURLS] = useLocalStorageState([], "shortURLs");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      setIsLoading(true);
      const shortenedURL =
        (await getShortURL(data.url)) || "Cannot be shortened. Sorry !";
      shortenURLS.unshift({ originalURL: data.url, shortURL: shortenedURL });
      setShortenURLS([...shortenURLS]);
    } catch (error) {
      console.log("Error occured *: ", error.message);
    } finally {
      setIsLoading(false);
    }
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
        {shortenURLS.length
          ? shortenURLS.map((shortUrl, index) => {
              return (
                <div className="shortener-result" key={index}>
                  <p className="shortener-original-url">
                    {truncateText(shortUrl.originalURL, 40)}
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
