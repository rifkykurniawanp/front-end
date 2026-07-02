// src/features/queue-registration/components/QueueModal.tsx
"use client"

import {
  Dialog,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
} from "@ark-ui/react/dialog"
import { Portal } from "@ark-ui/react/portal"
import { useQueueForm } from "../hooks/useQueueForm"
import { QueueForm } from "./QueueForm"
import { QueueSuccess } from "./QueueSuccess"
import { SERVICE_OPTIONS } from "../utils/constants"

interface Props {
  open: boolean
  onClose: () => void
}

export const QueueModal = ({ open, onClose }: Props) => {
  const {
    form, errors, setField, submit, reset, isSubmitting, isSuccess,
    selectedLocation, availableTimeSlots, isSelectedDateValid,
  } = useQueueForm()

  const serviceLabel =
    SERVICE_OPTIONS.find((s) => s.value === form.service)?.label ?? ""

  const handleClose = () => {
    onClose()
    setTimeout(reset, 300)
  }

  return (
    <Dialog open={open} onOpenChange={({ open }) => !open && handleClose()}>
      <Portal>
        {/* Backdrop */}
        <DialogBackdrop className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />

        {/* Dialog */}
        <DialogPositioner className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <DialogContent className="relative w-full max-w-lg rounded-2xl bg-white shadow-xl max-h-[90vh] overflow-y-auto">

            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white border-b border-slate-100">
              <div>
                <DialogTitle className="text-base font-semibold text-slate-800">
                  Daftar Antrian
                </DialogTitle>
                <DialogDescription className="text-xs text-slate-400 mt-0.5">
                  Isi form berikut untuk mendaftar antrian
                </DialogDescription>
              </div>
              <DialogCloseTrigger
                onClick={handleClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </DialogCloseTrigger>
            </div>

            {/* Body */}
            <div className="px-6 py-5">
              {isSuccess ? (
                <QueueSuccess
                  name={form.name}
                  service={serviceLabel}
                  date={new Date(form.date).toLocaleDateString("id-ID", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  onReset={reset}
                />
              ) : (
                <QueueForm
                  form={form}
                  errors={errors}
                  isSubmitting={isSubmitting}
                  selectedLocation={selectedLocation}
                  availableTimeSlots={availableTimeSlots}
                  isSelectedDateValid={isSelectedDateValid}
                  setField={setField}
                  onSubmit={submit}
                />
              )}
            </div>

          </DialogContent>
        </DialogPositioner>
      </Portal>
    </Dialog>
  )
}

export const QueueModal = ({ open, onClose }: Props) => {
  const { form, errors, status, setField, submit, reset, isSubmitting, isSuccess,
          selectedLocation, availableTimeSlots, isSelectedDateValid } = useQueueForm()

  const serviceLabel =
    SERVICE_OPTIONS.find((s) => s.value === form.service)?.label ?? ""

  const handleClose = () => {
    onClose()
    // Reset setelah animasi close selesai
    setTimeout(reset, 300)
  }

  return (
    <Dialog.Root open={open} onOpenChange={({ open }) => !open && handleClose()}>
      <Portal>
        {/* Backdrop */}
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Dialog */}
        <Dialog.Positioner className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="relative w-full max-w-lg rounded-2xl bg-white shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 max-h-[90vh] overflow-y-auto">

            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white border-b border-slate-100">
              <div>
                <Dialog.Title className="text-base font-semibold text-slate-800">
                  Daftar Antrian
                </Dialog.Title>
                <Dialog.Description className="text-xs text-slate-400 mt-0.5">
                  Isi form berikut untuk mendaftar antrian
                </Dialog.Description>
              </div>
              <Dialog.CloseTrigger
                onClick={handleClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Dialog.CloseTrigger>
            </div>

            {/* Body */}
            <div className="px-6 py-5">
              {isSuccess ? (
                <QueueSuccess
                  name={form.name}
                  service={serviceLabel}
                  date={new Date(form.date).toLocaleDateString("id-ID", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  onReset={() => { reset(); }}
                />
              ) : (
                <QueueForm
                  form={form}
                  errors={errors}
                  isSubmitting={isSubmitting}
                  selectedLocation={selectedLocation}
                  availableTimeSlots={availableTimeSlots}
                  isSelectedDateValid={isSelectedDateValid}
                  setField={setField}
                  onSubmit={submit}
                />
              )}
            </div>

          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
