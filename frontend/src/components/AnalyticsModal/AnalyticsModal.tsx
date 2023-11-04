import {Modal} from "@mui/material";
import Box from "@mui/material/Box";

type AnalyticsModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
}

export default function AnalyticsModal({ isModalOpen, onClose: closeModal }: AnalyticsModalProps) {

  return (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '10px',
        marginLeft: '10px'
      }}
    >
      <Box sx={{
        width: 400,
        bgcolor: 'white',
        p: 3,
        borderRadius: 2,
      }}>
      </Box>
    </Modal>
  )
}