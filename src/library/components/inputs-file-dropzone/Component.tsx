export default function InputsFileDropzone() {
  return (
    <div className="w-72 rounded-lg border border-dashed border-neutral-300 bg-neutral-50 p-5 text-center text-neutral-900 sm:w-96"><div className="mx-auto flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"><svg className="size-5 shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16V3m-4 4 4-4 4 4M5 14v7h14v-7" /></svg></div>
    <label className="mt-3 block text-sm font-semibold" htmlFor="inputs-file-dropzone-file">Attach a file</label>
    <input className="mt-3 block w-full min-w-0 rounded-md border border-neutral-300 bg-white p-2 text-xs text-neutral-600 file:mr-2 file:rounded-md file:border-0 file:bg-neutral-900 file:px-3 file:py-2 file:text-xs file:font-medium file:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" id="inputs-file-dropzone-file" name="attachment" type="file" accept=".pdf,.txt" aria-describedby="inputs-file-dropzone-hint" />
    <p className="mt-3 text-xs text-neutral-500" id="inputs-file-dropzone-hint">PDF or TXT, up to 10 MB.</p></div>
  )
}
