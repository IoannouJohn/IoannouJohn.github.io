import PyPDF2

def merge_pages(input_pdf_path, output_pdf_path, page_numbers):
    # Create a PDF writer object
    pdf_writer = PyPDF2.PdfWriter()

    # Open the input PDF file
    with open(input_pdf_path, 'rb') as pdf_file:
        # Create a PDF reader object
        pdf_reader = PyPDF2.PdfReader(pdf_file)

        # Iterate through the specified page numbers and add them to the new PDF
        for page_number in page_numbers:
            # Ensure the page number is valid
            if 0 < page_number <= len(pdf_reader.pages):
                page = pdf_reader.pages[page_number - 1]
                pdf_writer.add_page(page)

    # Write the merged PDF to the output file
    with open(output_pdf_path, 'wb') as output_file:
        pdf_writer.write(output_file)


def pageNumbersFromRanges(ranges):
    pass

if __name__ == "__main__":
    # Input PDF file path
    input_pdf_path = "ConductRouletteGamesLearnerGuide-Updated.pdf"  # Replace with the path to your input PDF file

    # Output PDF file path
    output_pdf_path = "output.pdf"  # Replace with the desired output PDF file path
    ranges = [
        161,163,
        
        238,251

    ]
    
    # for x in range(0, 3, 2):
    #     print(x) 
    # input("qwerty")
    
    page_numbers_to_stitch = [1]  # Replace with the desired page numbers

    for i in range(0, len(ranges) - 1 , 2):        
        print(f'@{ranges[i]}')
        
        pageDelta = 0
        while pageDelta + ranges[i] <= ranges[i + 1]:
            print(ranges[i] + pageDelta)
            page_numbers_to_stitch.append(ranges[i] + pageDelta)
            pageDelta += 1
        
    print(page_numbers_to_stitch)

    # Call the function to merge pages
    merge_pages(input_pdf_path, output_pdf_path, page_numbers_to_stitch)

    print(f"PDF with pages {page_numbers_to_stitch} stitched together successfully.")
