import React, { useState } from "react";
import Papa from "papaparse";
import icon from "../assets/Icon.png";
import excelicon from "../assets/Frame 7682.png";
import { useTheme } from "./ThemeContext";

const Card = () => {
  const { theme } = useTheme();
  const [csvData, setCsvData] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
      Papa.parse(file, {
        complete: (result) => {
          if (!result.data || result.data.length < 2) return;

          const expectedColumns = [
            "id",
            "links",
            "prefix",
            "select tags",
            "selected tags",
          ];
          const fileColumns = Object.keys(result.data[0]);

          if (!expectedColumns.every((col) => fileColumns.includes(col))) return;

          const formattedData = result.data.slice(1).map((row, index) => ({
            ...row,
            "S.no": index + 1,
          }));

          setCsvData(formattedData);
        },
        header: true,
      });
    }
  };

  const handleTagSelection = (rowIndex, selectedTag) => {
    const updatedSelectedTags = [
      ...selectedTags,
      { rowIndex, tag: selectedTag },
    ];
    setSelectedTags(updatedSelectedTags);

    const updatedCsvData = [...csvData];
    const selectedRowIndex = updatedSelectedTags.find(
      (tag) => tag.tag === selectedTag
    )?.rowIndex;
    if (selectedRowIndex !== undefined) {
      updatedCsvData[selectedRowIndex]["select tags"] =
        updatedCsvData[selectedRowIndex]["select tags"]
          .split(",")
          .filter((tag) => tag.trim() !== selectedTag)
          .join(",");
    }

    setCsvData(updatedCsvData);
  };

  const handleRemoveTag = (rowIndex, tagToRemove) => {
    const updatedSelectedTags = selectedTags.filter(
      (tag) => !(tag.rowIndex === rowIndex && tag.tag === tagToRemove)
    );
    setSelectedTags(updatedSelectedTags);

    const updatedCsvData = [...csvData];
    const rowTags = csvData[rowIndex]["select tags"].split(",");
    updatedCsvData[rowIndex]["select tags"] = [...rowTags, tagToRemove].join(
      ","
    );

    setCsvData(updatedCsvData);
  };

  const handleRemoveFile = () => {
    setUploadedFileName("");
    setCsvData([]);
    setSelectedTags([]);
  };

  const tableBgColor = theme === "dark" ? "#0D0D0D" : "#F5F5F5";
  const rowBgColor = theme === "dark" ? "#161616" : "#FFFFFF";
  const headerBgColor = theme === "dark" ? "#1E1E1E" : "#E0E0E0"; // New color for header
  const selectTagBgColor = theme === "dark" ? "#000000" : "#287EFF";
  const dropdownBgColor = theme === "dark" ? "#000000" : "#287EFF";
  const textColor = theme === "dark" ? "#FFFFFF" : "#000000";

  return (
    <div className="flex flex-col items-center gap-6 overflow-auto px-4 md:px-0">
      <div
        className="flex flex-col py-5 shadow-xl border-2 border-slate-200 w-full max-w-lg mt-12 px-6"
        style={{ backgroundColor: theme === "dark" ? "#0D0D0D" : "#FFFFFF" }}
      >
        <label
          htmlFor="fileInput"
          className="rounded flex flex-col items-center gap-6 justify-center w-full h-64 border border-dotted"
        >
          <input
            type="file"
            id="fileInput"
            accept=".csv"
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
          <img alt="excelicon" src={excelicon} className="w-12 h-12" />
          {uploadedFileName ? (
            <div className="flex items-center gap-4">
              <p style={{ color: textColor }}>{uploadedFileName}</p>
              <span
                onClick={handleRemoveFile}
                style={{ color: "red", cursor: "pointer" }}
              >
                Remove
              </span>
            </div>
          ) : (
            <p style={{ color: textColor }}>
              Drop your CSV file here or{" "}
              <span className="text-[#605BFF]">Browse</span>
            </p>
          )}
        </label>
        <button className="bg-[#605BFF] rounded-xl w-full h-14 mt-4 font-bold text-white">
          <label
            htmlFor="fileInput"
            className="flex items-center gap-4 justify-center"
          >
            <img alt="dashboard" src={icon} className="w-6 h-6" />
            Upload
          </label>
        </button>
      </div>

      {csvData.length > 0 && (
        <div className="w-full max-w-3xl mt-8">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-semibold" style={{ font: "figtree" }}>
              Uploads
            </p>
          </div>
          <div className="relative">
            <div className="overflow-x-auto">
              <table
                className="w-full table-auto shadow-md border-separate border-spacing-y-3"
                style={{ background: tableBgColor }}
              >
                <thead className="sticky top-0" style={{  height: '35px' }}>
                  <tr>
                    <th className="sticky left-0 text-center" style={{ background: headerBgColor }}>S.no</th>
                    <th className="text-center" style={{ background: headerBgColor }}>Links</th>
                    <th className="text-center" style={{ background: headerBgColor }}>Prefix</th>
                    <th className="text-center" style={{ background: headerBgColor }}>Add Tags</th>
                    <th className="text-center" style={{ background: headerBgColor }}>Selected Tags</th>
                  </tr>
                </thead>
                <tbody>
                  {csvData.slice(0, 39).map((row, index) => (
                    <tr key={index + 1} style={{ background: rowBgColor }}>
                      <td className="sticky left-0 text-center" style={{ padding: '8px' }}>{index + 1}</td>
                      <td className="text-center" style={{ padding: '8px' }}>
                        <a
                          href={row["links"]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          {row["links"]}
                        </a>
                      </td>
                      <td className="text-center" style={{ padding: '8px' }}>{row["prefix"]}</td>
                      <td className="text-center" style={{ padding: '8px' }}>
                        <select
                          className="text-center"
                          value={
                            selectedTags.find((tag) => tag.rowIndex === index)?.tag ||
                            "Select tags"
                          }
                          onChange={(e) =>
                            handleTagSelection(index, e.target.value)
                          }
                          style={{ backgroundColor: selectTagBgColor }}
                        >
                          <option disabled>Select tags</option>
                          {row["select tags"]
                            .split(",")
                            .filter(
                              (tag) =>
                                !selectedTags.some(
                                  (selected) => selected.tag === tag.trim()
                                )
                            )
                            .map((tag, tagIndex) => (
                              <option
                                key={tagIndex}
                                value={tag.trim()}
                                style={{ backgroundColor: dropdownBgColor }}
                              >
                                {tag.trim()}
                              </option>
                            ))}
                        </select>
                      </td>
                      <td className="text-center" style={{ padding: '8px' }}>
                        {selectedTags
                          .filter((tag) => tag.rowIndex === index)
                          .map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-[#605BFF] rounded px-2 text-white inline-flex items-center mr-2"
                            >
                              {tag.tag}
                              <span
                                onClick={() =>
                                  handleRemoveTag(index, tag.tag)
                                }
                                className="ml-2 cursor-pointer"
                                style={{ color: "white" }}
                              >
                                &times;
                              </span>
                            </span>
                          ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
