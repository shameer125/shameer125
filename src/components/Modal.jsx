import React from 'react';
import parser from 'html-react-parser';

export default function Modal({ modalData }) {
  const { thumbUrl, details, liveDemoLinkLabel, liveDemoUnavailableNote } =
    modalData;
  const {
    title,
    description,
    type,
    langages,
    platform,
    country,
    liveUrl,
    url,
  } = details;
  const liveNorm = liveUrl && String(liveUrl).replace(/\/$/, '');
  const urlNorm = url && String(url).replace(/\/$/, '');
  const repoRowHidden = liveNorm && urlNorm && liveNorm === urlNorm;
  return (
    <div className="px-modal">
      <div className="single-project-box">
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-[58.333333%]">
            <img
              className="border border-[#dee2e6]"
              src={thumbUrl}
              alt="Thumbnail"
            />
          </div>
          <div className="w-full pt-4 lg:w-[41.666667%] lg:pt-0">
            {title && <h4>{parser(title)}</h4>}
            {description && <p>{description}</p>}
            <div className="about-content">
              <ul>
                {type && (
                  <li className="flex">
                    <span className="w-1/3 shrink-0 text-[#111] lg:w-1/4">
                      Type:
                    </span>
                    <span>{type}</span>
                  </li>
                )}
                {langages && (
                  <li className="flex">
                    <span className="w-1/3 shrink-0 text-[#111] lg:w-1/4">
                      Langages:
                    </span>
                    <span>{langages}</span>
                  </li>
                )}
                {platform && (
                  <li className="flex">
                    <span className="w-1/3 shrink-0 text-[#111] lg:w-1/4">
                      Platform:
                    </span>
                    <span>{platform}</span>
                  </li>
                )}
                {country && (
                  <li className="flex">
                    <span className="w-1/3 shrink-0 text-[#111] lg:w-1/4">
                      Country:
                    </span>
                    <span>{country}</span>
                  </li>
                )}
                {liveUrl && (
                  <li className="flex">
                    <span className="w-1/3 shrink-0 text-[#111] lg:w-1/4">
                      Live demo:
                    </span>
                    <span>
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all text-[var(--px-theme)] underline underline-offset-2 hover:opacity-80"
                      >
                        {liveDemoLinkLabel || liveUrl}
                      </a>
                    </span>
                  </li>
                )}
                {!liveUrl && liveDemoUnavailableNote ? (
                  <li className="flex">
                    <span className="w-1/3 shrink-0 text-[#111] lg:w-1/4">
                      Live demo:
                    </span>
                    <span className="text-[#444]">{liveDemoUnavailableNote}</span>
                  </li>
                ) : null}
                {url && !repoRowHidden ? (
                  <li className="flex">
                    <span className="w-1/3 shrink-0 text-[#111] lg:w-1/4">
                      {liveUrl ? 'Repository:' : 'Link:'}
                    </span>
                    <span>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all text-[var(--px-theme)] underline underline-offset-2 hover:opacity-80"
                      >
                        {url}
                      </a>
                    </span>
                  </li>
                ) : null}
              </ul>
            </div>

          </div>

        </div>

      </div>
      
    </div>
  );
}
